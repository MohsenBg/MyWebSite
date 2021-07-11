interface Items {
  id: number;
  MainTitle: string;
  Title2: string;
  Title3?: string;
  paragraph1: string;
  Title4?: string;
  paragraph2?: string;
  open: boolean;
}

export const AboutItem: Array<Items> = [
  {
    id: 1,
    MainTitle: "React",
    Title2: "what I know about React",
    Title3: "ClassComponent",
    paragraph1:
      "Rendering Elements , Components and Props , State and Lifecycle,Handling Events, State and Lifecycle, Conditional Rendering,Lists and Keys",
    Title4: "Functional Component (Hooks)",
    paragraph2:
      " Rendering Elements , Components and Props , State and Lifecycle,Handling Events, State and Lifecycle, Conditional Rendering,Lists and Keys,Using the Effect Hook,Rules of Hooks",
    open: true,
  },
  {
    id: 2,
    MainTitle: "Redux",
    Title2: "what I know about Redux",
    Title3: "Redux",
    paragraph1:
      " Action(type and payload), Reducer + State , dispatchStore, actionType debug redux, connection with hook like useDispatch and useState and classComponent or hook use connection and dispatch or State to props.",
    open: true,
  },
  {
    id: 3,
    MainTitle: "Html5/Css3",
    Title2: "what I know about Html5/css3",
    Title3: "Html5",
    paragraph1:
      "not all tags but many of tags , add script and style in html but not recommended, meta and ...",
    Title4: "css3",
    paragraph2:
      " flex box, grid , border, padding , object , position like absolute relative fix sticky and ... ,adding Style to text  or div and img or ... ,svg , transition and animation (keyframes and ... ).",
    open: true,
  },
  {
    id: 4,
    MainTitle: "JavaScript",
    Title2: "what I know about JavaScript",
    Title3: "JavaScript",
    paragraph1:
      " basic of programing language Like loop while Condition like if and switch ... ,ECM6 , important function like map filter ... and event handler like onclick ...,access to dom or html add element and more ...",
    open: true,
  },
  {
    id: 5,
    MainTitle: "TypeScript",
    Title2: "what I know about TypeScript",
    Title3: "TypeScript",
    paragraph1:
      "defined type like react ClassComponent or hook and redux and type of most function and event handler , make interface or class",
    open: true,
  },

  {
    id: 6,
    MainTitle: "Sass",
    Title2: "what I know about Sass",
    Title3: "Sass",
    paragraph1:
      " function , mixin , partials , Condition , variables ,nest make loop and so many futures ...",
    open: true,
  },
  {
    id: 7,
    MainTitle: "MySql",
    Title2: "what I know about Mysql",
    Title3: "MySql",
    paragraph1:
      " not much know only basic like make date base schema make post pull or delete and get with express and sql and also know basic of query like change table or join table delete it add colum and ...",
    open: true,
  },
  {
    id: 8,
    MainTitle: "MongoDb",
    Title2: "what I know about MongoDb",
    Title3: "MongoDb",
    paragraph1:
      "know only basic mongo work with atlas and make date base     schema document know json make post pull or delete and get with express and axios and also know some function of mongo like save or findById and.. it add colum and ..., make router",
    open: true,
  },
];
