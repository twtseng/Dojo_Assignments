/*
Imagine that you want to schedule a meeting of a certain duration with a coworker.
You have access to your calendar and their calendar which contains meetings in the 
form of [startTime, endTime] as well as your daily bounds when you are available.

Write a function that takes in both of your calendars and daily bounds, and the duration
of meeting you want to schedule, and returns the list of all time blocks in form of 
[startTime, endTime] during which you could schedule the meeting, ordered from earliest
to latest.

Sample input:

*   "calendar1": [
    ["7:00", "7:45"],
    ["8:15", "8:30"],
    ["9:00", "10:30"],
    ["12:00", "14:00"],
    ["14:00", "15:00"],
    ["15:15", "15:30"],
    ["16:30", "18:30"],
    ["20:00", "21:00"]
  ],
  "calendar2": [
    ["9:00", "10:00"],
    ["11:15", "11:30"],
    ["11:45", "17:00"],
    ["17:30", "19:00"],
    ["20:00", "22:15"]
  ],
  "dailyBounds1": ["6:30", "22:00"],
  "dailyBounds2": ["8:00", "22:30"]

  Sample output for 30 minute meeting:
  [['11:30','12:00],['15:00','16:00'],['18:00','18:30']]
  
			 * */
function CalendarMatch(calendar1, calendar2, dailyBounds1, dailyBounds2, duration)
{
  // Combine 2 calendars into 1, sorted by start time
  let calendars = calendar1.concat(calendar2);
  calendars = calendars.map(([start, end]) => [new Date("1/1/2000 "+start), new Date("1/1/2000 "+end)]);
  calendars.sort((a,b) => a[0] - b[0]);
  console.log("=== combined list ===")
  console.log(calendars);

  // Merge overlapping entries
  let mergedCalendar = [];
  let startTime = calendars[0][0];
  let endTime = calendars[0][1];
  for(let i=1; i<calendars.length; ++i) {
    const [newStartTime, newEndTime] = calendars[i];
    // If overlap (new startTime is between previous start and end)
    if (startTime <= newStartTime && newStartTime <= endTime) {
      if (newEndTime > endTime) {
        endTime = newEndTime;
      }
    } else {
      // If no overlap, just push it onto the mergedCalendar
      mergedCalendar.push([startTime, endTime]);
      startTime = newStartTime;
      endTime = newEndTime;
    }
  }
  mergedCalendar.push([startTime, endTime]);
  console.log("=== merged list ===")
  console.log(mergedCalendar);

  let dailyBoundStart = dailyBounds1[0] > dailyBounds2[0] ? dailyBounds1[0] : dailyBounds2[0];
  dailyBoundStart = new Date("1/1/2000 "+dailyBoundStart)
  let dailyBoundEnd = dailyBounds1[1] < dailyBounds2[1] ? dailyBounds1[1] : dailyBounds2[1];
  dailyBoundEnd = new Date("1/1/2000 "+dailyBoundEnd)
  console.log(`=== dailyBoundStart:${dailyBoundStart} dailyBoundEnd:${dailyBoundEnd}`);

  // Get the open slots
  let openSlots = []
  startTime = dailyBoundStart;
  for(let i=0; i<mergedCalendar.length; ++i) {
    const [blockStart, blockEnd] = mergedCalendar[i];
    if (startTime < blockStart && blockStart) {
      openSlots.push([startTime, blockStart]);
    }
    startTime = blockEnd;
  }
  if (startTime < dailyBoundEnd) {
    openSlots.push([startTime, dailyBoundEnd]);
  }
  console.log("=== open slots ===")
  console.log(openSlots);

  // Get open slots between daily bounds, and trim the slots according to the bounds if necessary
  let availableSlots = []
  for(let i=0; i<openSlots.length; ++i) {
    let [blockStart, blockEnd] = openSlots[i];
    blockStart = blockStart < dailyBoundStart ? dailyBoundStart : blockStart;
    blockEnd = blockEnd > dailyBoundEnd ? dailyBoundEnd : blockEnd;
    blockDuration = (blockEnd - blockStart) / (60 * 1000)
    console.log(`blockStart:${blockStart} blockEnd:${blockEnd} blockDuration:${blockDuration}`);
    if (blockDuration >= duration) {
      availableSlots.push([blockStart, blockEnd]);
    }
  }

  console.log("=== availableSlots ===")
  console.log(availableSlots);  
}

const calendar1 =[
    ["7:00", "7:45"],
    ["8:15", "8:30"],
    ["9:00", "10:30"],
    ["12:00", "14:00"],
    ["14:00", "15:00"],
    ["15:15", "15:30"],
    ["16:30", "18:30"],
    ["20:00", "21:00"]
  ];
const calendar2 = [
    ["9:00", "10:00"],
    ["11:15", "11:30"],
    ["11:45", "17:00"],
    ["17:30", "19:00"],
    ["20:00", "22:15"]
  ];

const dailyBounds1 =["6:30", "22:00"];
const dailyBounds2 = ["8:00", "22:30"];
CalendarMatch(calendar1, calendar2, dailyBounds1, dailyBounds2, 30);