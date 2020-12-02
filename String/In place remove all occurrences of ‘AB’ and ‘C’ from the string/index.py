def remove(char):
    i =0
    j =0

    while i < len(char):

        if(i < len(char)-1 and char[i]== "A" and char[i]=="B"):
            i +=2
        elif char[i] == "C":
            i +=1
        else:
            char[j] = char[i]
            i++
            j++

    print(char,j)