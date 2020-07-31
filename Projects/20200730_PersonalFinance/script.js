var appData = {
    billsData: [],
    year: "",
    month: "",
    week: "All",
    filteredData: [],
    startDate: "no data",
    endDate: "no data",
    totalExpenses: "no data",
    bucketSums: {}
}
$(document).ready(function () {
    $('#yearDropdown').change(filterBillsData);
    $('#monthDropdown').change(filterBillsData);
    $('#weekDropdown').change(filterBillsData);
    let date = new Date();
    $('#yearDropdown').val(date.getFullYear());
    $('#monthDropdown').val(date.getMonth() + 1);
    $.get("https://prod-15.southcentralus.logic.azure.com:443/workflows/bc539d98b98c467da027fce7051596c9/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BlaPgb06zVi41NUDBg5Mwjmb245s6Vpdn_WJA9nq05w", loadBillsData)
});

function filterBillsData() {
    appData.year = $('#yearDropdown option:selected').val();
    appData.month = $('#monthDropdown option:selected').val();
    appData.week = $('#weekDropdown option:selected').val();

    // Filter data based on dates selected by user
    appData.filteredData = appData.billsData.filter(x => x.Year == appData.year);
    appData.filteredData = appData.filteredData.filter(x => x.Month == appData.month);
    if (appData.week != 'All') {
        appData.filteredData = appData.filteredData.filter(x => x.WeekNum == appData.week);
    }

    if (appData.filteredData.length == 0) {
        appData.startDate = "No Data";
        appData.endDate = "No Data";
        appData.totalExpenses = "No Data";
        appData.bucketSums = {};
    } else {
        // Generate statistics for total expense and timespan 
        appData.totalExpenses = appData.filteredData.reduce(
            (total, obj) => { return total + obj.Amount; }
            , 0);
        appData.startDate = appData.filteredData.reduce(
            (minDate, obj) => {
                if (minDate == null) {
                    return obj.Date;
                } else if (minDate < obj.Date) {
                    return minDate;
                } else {
                    return obj.Date;
                }
            }, '2100-01-01T00:00:00'
        );
        appData.endDate = appData.filteredData.reduce(
            (maxDate, obj) => {
                if (maxDate > obj.Date) {
                    return maxDate;
                } else {
                    return obj.Date;
                }
            }, '2000-01-01T00:00:00'
        );
        // Generate bucketized expense totals
        appData.bucketSums = {};
        appData.filteredData.forEach(
            x => {
                if (appData.bucketSums[x.Bucket] == undefined) {
                    appData.bucketSums[x.Bucket] = x.Amount;
                } else {
                    appData.bucketSums[x.Bucket] += x.Amount;
                }

            }
        );
    }
    displayBillsDetails();
}
function loadBillsData(response) {
    $('#billsLoadingSpinner').show();
    appData.billsData = response;
    filterBillsData();
}

function displayBillsDetails() {
    html = "";
    Object.keys(appData.bucketSums).sort().forEach(bucket => {
        html += `<span class="col-sm-6 col-md-4 col-lg-3">
                    <b>${bucket}: </b>${appData.bucketSums[bucket]}</td>
                </span>`
    });
    $('#billsDetails').html(html);
    $('#billsLoadingSpinner').hide();
    $('#startDate').html(appData.startDate.substring(0, 10));
    $('#endDate').html(appData.endDate.substring(0, 10));
    $('#totalExpenses').html(appData.totalExpenses);
}

