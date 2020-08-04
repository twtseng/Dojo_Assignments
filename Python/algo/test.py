def reverse(str):
    string_val=""
    for i in range(len(str)-1, -1, -1):
        string_val += str[i]
    return string_val

print(reverse("hi there")) 