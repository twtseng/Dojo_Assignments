# Given a set of characters C and an integer k, a De Bruijn sequence is a cyclic sequence in 
# which every possible k-length string of characters in C occurs exactly once.
# For example, suppose C = {0, 1} and k = 3. 
# Then our sequence should contain the substrings {'000', '001', '010', '011', '100', '101', '110', '111'}, 
# and one possible solution would be 00010111.
# Create an algorithm that finds a De Bruijn sequence.
import itertools

def de_bruijn_sequence(chars, k):
    possible_combos = itertools.product(chars,repeat=k)
    possible_strings = [''.join([str(x) for x in c]) for c in possible_combos]
    print(f"possible_strings: {possible_strings}")
    matching_sequences = []

    def recurse_seq(acc_string, remaining_strings):
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
                    recurse_seq(new_acc_string, new_remaining_strings)
    recurse_seq("", possible_strings)
    return matching_sequences
  
def test_de_bruijn_sequence(inputchars, k):
    print(f'test_de_bruijn_sequence: chars: {inputchars}, k: {k}')
    print('======== RESULT =======')
    result_string = de_bruijn_sequence(inputchars, k)
    print(result_string)


test_de_bruijn_sequence("01",3)



"""
1) get permutations (python product itertools) as list
2) combine list into a string
3) create empty set
4) loop through string and when a permutation is found (k length char at a time) compare to see if in set already if not add it to set and if it is remove it from string
5) once loop is complete compare set to list and if match then return string
6) if not append the missing permutations to the end of the string and repeat
"""

# def de_bruijin(input, k):
#     perms = itertools.product(input, k)
#     perm_set = {}
#     superperm = "".join(perms)
#     while len(perms) > len(perm_set):
#         for i in range(len(superperm)-k):
#             cur = superperm[i:k]
#             if cur in perm_set:
#                 superperm.replace(cur, "")
#             else:
#                 perm_set.add(cur)
#         if len(perms) == len(perm_set):
#             return superperm
#         else:
#             superperm = "".join(perm_set)
#             for perm in perms:
#                 if perm not in perm_set:
#                     superperm += str(perm)