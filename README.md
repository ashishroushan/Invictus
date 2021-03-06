# Invictus Assignment:    
The web App shows the list of top most occuring words in tabular format after fetching the data from the given API.
The web App is built using **ReactJS** along with hooks. For fetching the data from the API by using the library named **AXIOS**. It is styled using the **latest CSS**. The web app is deployed on [NETLIFY](https://focused-mccarthy-15ab84.netlify.app "Deployed site") website.

## COMPONENTS:
### 1.HomePage:
It shows basic structure of the website and fetches data by calling API using axios and performs the logical operations on the data to make a list and arranging its component in decending order of occurrence which was later shown to the user in INPUT component by passing the array of "words and their frequency of occurrence" via props.

![chrome_2021-05-17_09-45-47](https://user-images.githubusercontent.com/75972049/118432034-407b5780-b6f5-11eb-9bc2-6e43041640c6.png)

### 2.Input:
This component takes the user input and performs slice operation on frequencyArray which it gets from its parent component which is HomePage and shows the required output.

![chrome_2021-05-17_10-06-43](https://user-images.githubusercontent.com/75972049/118433040-b7b1eb00-b6f7-11eb-8850-daaf32934b87.png)

when clicked on the input field and entered any number submit button will appear on screen and when number is deleted it will dissapear again this is managed by using hooks(usState and useEffect). Input field has animation effect and Submit button has dim bluish glow when hovering it was achieved by using CSS. 

![chrome_2021-05-17_10-06-30](https://user-images.githubusercontent.com/75972049/118433217-1a0aeb80-b6f8-11eb-9aca-0b4045e7345f.png)

After taking the input it shows the output in tabular format by rendering the table using "map" method. 

![chrome_2021-05-17_10-17-12](https://user-images.githubusercontent.com/75972049/118433637-0f9d2180-b6f9-11eb-9ae6-6932c94ddc4c.png)


### 3.Warning:
When user gives invalid intput like a negative number then this component renders a card which shows error message and the basic instructions to follow and it can be dismissed by clicking the dismiss button or by changing the input.
The cross icon is imported from [fontawesome](https://fontawesome.com/icons/times?style=solid)


![chrome_2021-05-17_10-06-17](https://user-images.githubusercontent.com/75972049/118433008-a963cf00-b6f7-11eb-8a91-df8b39aebe26.png)


### 4.Steps:
This component renders the basic steps/instructions for user to get them know how to use the website. This will be rendered whenever the input field becomes empty.

![chrome_2021-05-17_09-48-52](https://user-images.githubusercontent.com/75972049/118431972-1aee4e00-b6f5-11eb-8e0e-30e3ab684e48.png)
 
 ## Test Cases
 ### 1. Negative or Zero as a Input 
 A warning message will be shown with instructions it will dissapear when input changes or when pressed dismissed button and renders only when the wrong Input is given.
 
 ![chrome_2021-05-17_10-27-20](https://user-images.githubusercontent.com/75972049/118434314-7bcc5500-b6fa-11eb-9aaf-e3426cbc25e3.png)

### 2. Input which exceeds the totals list of words 
Again the warning tag will be rendered.

![chrome_2021-05-17_10-30-10](https://user-images.githubusercontent.com/75972049/118434638-03b25f00-b6fb-11eb-9306-b85e501ced7b.png)

### 3. No Input
A message will be shown saying this field is required. It is achieved by putting "required" property in input tag.

![chrome_2021-05-17_10-33-08](https://user-images.githubusercontent.com/75972049/118434787-4b38eb00-b6fb-11eb-82d1-f093811b72ec.png)
