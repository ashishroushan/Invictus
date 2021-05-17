Invictus Assignment
The web App shows the list of top most occuring words in tabular format after fetching the data from the given API.
The web App is built using ReactJS along with hooks. For fetching the data from the API the library named AXIOS is used. It is a fully responsive website which is styled using the latest CSS. It is deployed on NETLIFY website.

COMPONENTS:
1.HomePage
It shows basic structure of the website and fetches data by calling API using axios and performs the logical operations on the data to make it a list and arranging its component in decending order which was later shown to the user in INPUT component by passing the array of "words and their frequency of occurrence" via props.
![chrome_2021-05-17_09-45-47](https://user-images.githubusercontent.com/75972049/118432034-407b5780-b6f5-11eb-9bc2-6e43041640c6.png)

2.Input
This component takes the user input and performs slice operation on frequencyArray which it gets from its parent component which is HomePage and shows the required output.
![chrome_2021-05-17_09-46-30](https://user-images.githubusercontent.com/75972049/118432044-47a26580-b6f5-11eb-8444-2a58edd91a67.png)

3.Warning
When user gives invalid intput like a negative number then this component renders a card which shows error message and the basic instructions.
![chrome_2021-05-17_09-47-07](https://user-images.githubusercontent.com/75972049/118432052-4cffb000-b6f5-11eb-9282-c374e6f004c9.png)

4.Steps
This component renders the basic steps/instructions for user to get them know how to use the website.![chrome_2021-05-17_09-48-52](https://user-images.githubusercontent.com/75972049/118431972-1aee4e00-b6f5-11eb-8e0e-30e3ab684e48.png)
 
