import itertools
# Given a set of characters C and an integer k, a De Bruijn sequence is a cyclic sequence in 
# which every possible k-length string of characters in C occurs exactly once.
# For example, suppose C = {0, 1} and k = 3. 
# Then our sequence should contain the substrings {'000', '001', '010', '011', '100', '101', '110', '111'}, 
# and one possible solution would be 00010111.
# Create an algorithm that finds a De Bruijn sequence.
def recurse_seq(acc_string, remaining_strings, k, matching_sequences):
    if len(remaining_strings)==0:
        matching_sequences.append(acc_string)
    else:
        if len(acc_string) < k:
            last_k_minus_1 = ""
        else:
            last_k_minus_1 = acc_string[-(k-1)::]
        for i in range(len(remaining_strings)):
            if remaining_strings[i].startswith(last_k_minus_1):
                new_remaining_strings = remaining_strings.copy()
                last_char = remaining_strings[i][-1::]
                new_remaining_strings.pop(i)
                if acc_string == "":
                    new_acc_string = remaining_strings[i]
                else:
                    new_acc_string = acc_string + last_char
                recurse_seq(new_acc_string, new_remaining_strings, k, matching_sequences)

def de_bruijn_sequence(chars, k):
    possible_combos = itertools.product(chars,repeat=k)
    possible_strings = [''.join([str(x) for x in c]) for c in possible_combos]
    print(f"possible_strings: {possible_strings}")
    matching_sequences = []
    recurse_seq("", possible_strings, k, matching_sequences)
    return matching_sequences
  
def test_de_bruijn_sequence(inputchars, k):
    print(f'test_de_bruijn_sequence: chars: {inputchars}, k: {k}')
    print('======== RESULT =======')
    results = de_bruijn_sequence(inputchars, k)
    possible_combos = itertools.product(inputchars,repeat=k)
    possible_strings = [''.join([str(x) for x in c]) for c in possible_combos]
    string_counts = {}
    first_match = results[0]
    #first_match = "000101110011111"
    print(f"First match: {first_match}")
    for p in possible_strings:
        string_counts[p] = first_match.count(p)
    print(f"Match counts: {string_counts}")


test_de_bruijn_sequence("01",3)