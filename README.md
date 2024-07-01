# Flames 🎖️

<https://flames.brimble.app>

FLAMES is a playful game that forecasts the nature of a relationship
between two people based on their names. If you're not familiar with
FLAMES, it entails removing the common letters in both names, then
counting the remaining letters as a whole number. This number is then
used to iterate on the letters of the word "FLAMES" until a letter is
selected as the final outcome.

## Why did I build this 🤔

I was playing the game with my sisters yesterday and I thought of bulding a web version just to share that childhood memory. I also did some DSA stuff in it. I did some research before building mine but their algorithm wasn't accurate enough. For example, I matched my name with a lady I like and I was getting `Enemies` instead of 😍. You get the vibe. I also tried other examples and what I got on paper wasn't correct with their output.

## Contributions 🤝

Okay, thanks in advance. Though I've done most of the work but here are some features that you can add, why didn't add it you might ask? Well I want this project to have public contributions as much as possible.

1. Share result on social platforms. This feature will allow users to share their result with their friends, crushes (God knows how many you have 👀) on social platforms like Facebook, Whatsapp, Twitter, Telegram and all. I've played with something like that before. <https://uselinq.vercel.app> you can check here for inspiration. <https://github.com/adedoyin-emmanuel/linq>. The share link will have some query parameters so when users visit the link, the app can get the query parameters to render the FLAME result. For example <https://flames.brimble.app?username=Emmanuel&crush=Emmanuella>
2. OG Image preview. This will be a game changer. I wouldn't hesitate to merge any PR that's going to add this feature to this project. The OG Image preview will work with the first feature which is the social sharing, upon the users sharing their links to their crush and all, an OG image showing their FLAME result is rendered. NOTE: This will be dynamic. (The crush name and the User name, their FLAME result and the message remark). The OG Image preview will be similar to the Dialog shown on the app. You can read vercel's docs to learn how to implement this feature. <https://vercel.com/docs/functions/og-image-generation#open-graph-og-image-generation> or visit the playground <https://og-playground.vercel.app/>

You can also submit your own ideas or features, I will check them out.

## Technical Documentation | How it works 🔧

Okay, now you're wondering how it works. If you haven't played the FLAMES game before, I recommend you read this. <https://flames.brimble.app/how-it-works> There is a youtube video that explains how to play the game. Once you get a clear understanding of how to play the game, you can come back here.

The FLAMES game is a game of strings. Basically all you're doing is string manipulation and concatenation. I will explain how I was able to implement the game in steps. So let's start with step 1.

### Step 1

Now the first step is getting the user input from the form. There are several ways to do that, and I will assume you can do that already. If you can't you, should watch this <https://www.youtube.com/results?search_query=how+to+get+form+input+value+in+javascript+> for more information.

Now, you've gotten the user input, the user input includes the username and their crush's name. You should also do some validation to make sure the input is valid. You should also trim the user input for whitespaces and also convert all strings to lowercase. Now, to the core.

### Step 2

The second step is creating a custom set class. I spoke of some DSA stuff, sets are part of DSA and they are used in solving some DSA problems. I've a repo doing some DSA stuffs here. <https://github.com/Adedoyin-Emmanuel/interview> although it has been a while I pushed to it but I promise to repent. So now we will need some methods for our custom set, now you might ask, why are we not using the built in Set class in JavaScript. Good question, now while the Set class is great and does the job 90% of the time, there are some cases where you will need more methods which the Set class doesn't support a good example of that case is now.

So our custom set will have methods like `intersection` and `has`. We are going to use TypeScript to implement that, if you're using JavaScript, you can skip the Typings and all

We declare a `MySet` class with a Generic Type `T` which allows the `MySet` class to be used with any data type. We then declare a private access modifier called collection. Why is it private? Well following a fundamental OOP principle called abstraction. Then we create a constructor function that initializes the private collecition to an empty array;

We then create an utility method called length, which returns the length of our collecition. Up next, we create a key method called has. This method is the core of our implementation. The method checks if there is a value in the collection and returns a boolean. Then we have a method which is also very important, infact if not the most important method in a Set class. This is the add method, now I customized the add method, the add method takes 2 arguments, 1. The value, 2. An optional boolean (default = true) argument that specifies if the add method should do a strict operation. What does this mean? Well if the strict method is set to true, the add method will not take add any duplicates and vice versa. The last method we will need is the intersection method will will help us get the the common elements in 2 sets. This is important in getting the result of the FLAMES. After this, we are good to move to the next step.

```Typescript
export default class Myset<T>{
    private collection:T [];

    constructor(){
        this.collection  = [];
    }


    public length () {
        return this.collection.length;
    }

    public has(element: T){
       return this.collection.indexOf(element) !== -1
    }

    public add(element: T, strict: boolean = true){
        if(strict){
            if (this.has(element)) return false;
        }

        this.collection.push(element);
        return true;
    }

    public intersection(set: MySet<T>): MySet<T>{
        const intersectionSet = new MySet<T>();

        this.collection.forEach((element) =>{
            if(set.has(element)){
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    }
}
```

### Step 3

This is like the penultimate step. This is where we create the `calculateFlames` function. I will explain the code as we go.

So here, we bring in all our validations.

```Typescript
  let combinedName = (formData.crushName + formData.yourName)
    .toLowerCase()
    .trim();
  let myName = formData.yourName.toLowerCase().trim();
  let myCrushName = formData.crushName.toLowerCase().trim();
```

Then we create 2 new sets from the `MySet` class.

```Typescript
  let myNameSet = new MySet<string>();
  let myCrushNameSet = new MySet<string>();
```

We loop through myName and myCrushName and then add the characters to myNameSet and myCrushNameSet respectively.

```Typescript
  for (let char of myName) {
    myNameSet.add(char, false);
  }

  for (let char of myCrushName) {
    myCrushNameSet.add(char, false);
  }
```

You can see that I passed false to the myNameSet and myCrushNameSet `.add()` method. This is because a name can have repeated letters for example `Emma` has 2 `m`.

The next thing we want to do is to calculate the common letters, matchOCcurrences, and resultant. We get the common letters by performing an intersection on both sets. From the common letters, we can get the match occurences of the common letters. Since a match is a letter stroking another that means for a match, 2 letters are involved so the matchOccurrences can be the length of the commonLetters \* 2. Then resultant which is the length of the letters left after the cancelling and stroking of the letters. The resultant can be gotten by concatenating both names and then subtracting the matchOccurrences from the result.

The resultant is then passed into a kinda object indexer that returns the respective FLAME match.

```Typescript
  const commonLetters = myNameSet.intersection(myCrushNameSet);
  const matchOccurrences = commonLetters.length() * 2;
  const resultant = combinedName.length - matchOccurrences;

```

### Step 4 | Final Step

The final step is running the resultant through the FLAMES indexer that spins the corresponding message. Although I customized mine to spin a message and then a descriptive message too.

```Typescript
  const FLAMES = ["F", "L", "A", "M", "E", "S"];
  const FLAMES_MEANINGS: any = {
    F: "Friends",
    L: "Lovers",
    A: "Admirers",
    M: "Marriage",
    E: "Enemies",
    S: "Secret Lovers",
  };

  const RESPONSES: any = {
    F: [
      "Dem friend zone you 🤗",
      "If boo bore aaah, adey 😎",
      "You are like a brother/sister to me 😊",
      "We be padi for life 🙌",
      "No love here, na pure friendship 🙅‍♂️",
      "Friendship na our portion 😂",
      "You no fit escape this friendship o 😄",
      "Na just friend vibes we dey catch 🎉",
      "You be my gist partner 📚",
      "Na you I dey call when gist full ground 🤣",
    ],
    L: [
      "You dey chop love ❤️",
      "No be small love 😍",
      "Me I dey eat 😍",
      "Na true love be this o 💕",
      "You don capture my heart finish 😘",
      "My heart na your own 😘",
      "Love wan finish me for your matter 💞",
      "We dey on top love cruise 🚢",
      "Your love dey shack me 💖",
      "You be the sugar for my tea ☕",
      "Kai, I go love o 😍",
    ],
    A: [
      "You fall pass 🥰",
      "I see you 👀",
      "Ask me out already 😏",
      "You don burst my brain 🥺",
      "Abeg, stop to dey form 😎",
      "I dey gbadun you 😍",
      "No dey do like say you no see me 🧐",
      "Make we run this matter 💌",
      "You be my crush since secondary school 🏫",
      "I dey feel you die 🥵",
    ],
    M: [
      "Dondooo !!",
      "Awares) 👏",
      "Journeying forever together 👫",
      "We don jam rock o 🥳",
      "Omo, na forever be this 💍",
      "We go dey together till old age 👴👵",
      "Na lifetime parole be this 💑",
      "I don find my missing rib 💖",
      "You be my better half 💑",
      "Na you be my one and only 💞",
    ],
    E: [
      "You're both toxic ⛔️",
      "We no dey mix like water and oil ☢️",
      "Shoot me already 🔥",
      "E never go work 😒",
      "May you live long to see my success 😡",
      "I hope KARMA slaps you before I do 👋",
      "Na wah for una 🚫",
      "We be like Tom and Jerry 🐭🐱",
      "You no dey my level 🚷",
      "Trouble dey sleep, yanga go wake am ⚡",
      "You be my wahala partner 😤",
      "I no fit deal with your drama 🎭",
      "Stop the fooling, e no fit work 🤡",
    ],
    S: [
      "How far plus the stalking? 👀",
      "Chale you for looksharp ! Shoot your shoot. 📢",
      "Make I be your anon",
      "Na secret admirer levels 😍",
      "I dey crush on you tay tay 😏",
      "Lowkey dey follow you 😍",
      "You be my lowkey bae 💘",
      "I dey eye you since 📸",
      "I dey monitor you like CCTV 📹",
      "Na you I dey dream about every night 🌙",
      "Tomorrow may be too late, shoot your shot now! 🫵",
    ],
  };

  const index = (resultant % FLAMES.length) - 1;
  const meaning = FLAMES_MEANINGS[FLAMES[index]];

```

Then the response, we need a way to randomly pick the messages from the each FLAMES letter. We can create an utility function to do that,

```Typescript

const randomResponse = (array: any) =>{
    return array[Math.floor(Math.random) * array.length]
}

```

After creating the utility function,we can return the response and then use the function in our HTML or React frontend

```Typescript


  const response = randomResponse(RESPONSES[FLAMES[index]]);

  return {
    meaning,
    response,
  };
```

You can go through how I rendered the response to the user. That will be all. Thanks for reading this far. Please consider starring this repo. Your contributions are highly welcome.

## Un-Official 🎖️

I deployed this project on brimble. Brimble is a platform that allows you to deploy and scale modern JavaScript applications. They are shipping awesome stuffs and you should totally check them out <https://brimble.io/>

## Inspiration 🧠

Inspired by
<https://flames.vercel.app/>
