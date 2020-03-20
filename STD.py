import numpy as np 
import json


# gets json file
with open('input.json') as f:               
  userDict = json.load(f)

# creates list of just values
userList = list(userDict.values())

#calulates STD of list of just values
stdValue = np.std(userList);

#prints STD value
print("STD is " + str(stdValue));