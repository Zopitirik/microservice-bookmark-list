## Microservice Bookmark List

Purpose of this project: There are so many services that I develop and maintain. I can't remember domain names of each of these services.
When I use browser's bookmark functionality, I lost between tabs that I have to open at least two or three to find what I am looking for. 
Also I wanted to see which developers are interested in that project. This project makes it easy to view (**in an iframe**)

## Road

1. My first need was to see swagger apis. So both project name & variables about swagger.
2. At day 2, I realized that I can put anything on this bookmark list and decided to change project name and variables name. But in order for this job not to move away from what I really need, I left project name as Microservice.

## Screenshots

![alt text](https://raw.githubusercontent.com/Zopitirik/microservice-bookmark-list/master/Microservice%20Bookmark%20List.png "Microsevrice Bookmark List")

## appSettings.json Data Structure

### Name

You can put your own app name to `Name` and it will be shown at top of sidebar. 

```json
{ 
    "Name": "My App",
    "Pages": [],
}
```

### Pages

You can see full data structure below.

`Id` should be unique and integer. Otherwise, program will not work.

```json
{ 
    "Id": "1",
    "Name": "All Together",
    "Description": "Lorem ipsum dolor sit amet",
    "SourceLink": "https://petstore.swagger.io",
    "ExternalLink": "https://www.google.com",
    "Peoples": [ "Jack", "John" ]
}
```

### Pages.Attributes

`Description | SourceLink | ExternalLink | Peoples` are optional and they will not display on ui if they are not exist or do not have any content.

One of page object with minimum data:

```json
{ 
    "Id": "1",
    "Name": "All Together"
}
```

***

`SourceLink` is iframe src attribute. Please fill it which website you want to display. In my case, it is mostly an swagger api url.

### Example 1

```json
{ 
    "Id": "1",
    "Name": "All Together",
    "SourceLink": "https://petstore.swagger.io",
}
```

### Example 2

```json
{ 
    "Id": "1",
    "Name": "All Together",
    "SourceLink": "https://www.github.com",
}
```

***


`ExternalLink` is stands for repository or any other related link will appear next to name. In my case, its mostly repository link

### Example 1 

```json
{ 
    "Id": "1",
    "Name": "All Together",
    "ExternalLink": "https://github.com/Zopitirik/microservice-bookmark-list",
    "Peoples": [ "Jack", "John" ]
}
```

***

`Peoples` who have developed and can maintain the service which at `SourceLink` link. It will be shown at the bottom of the top title.

### Example 1 

```json
{ 
    "Id": "1",
    "Name": "All Together",
    "ExternalLink": "https://github.com/Zopitirik/microservice-bookmark-list",
    "Peoples": [ "Jack", "John" ]
}
```