r=int(input("enter number of rows"))
def pyramid(r):
    array=''
    i=0
    while(i<r):
        array+=str(i*2+1)+' '
        print(array)
        i+=1
    
pyramid(r)