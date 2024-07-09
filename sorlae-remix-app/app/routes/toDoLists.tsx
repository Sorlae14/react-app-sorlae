const todos =[
    {
        id: 100,
        title:"เป็นเจ้าหน้าที่itสุดโหดสุดเกรงขาม",
        checked:true
    },
    {
        id: 200,
        title:"แฮกระบบธนาครปล้นเงินหนีออกจากโลก",
        checked:false
    },
    {
        id: 300,
        title:"หนีจากนอกโลกไปหาโลกทำทุนสร้างประเทศตัวเองตั้งตัวเองเป็นพระเจ้า",
        checked:false
    }
];

function Item({title, chk}:{title:String,chk:boolean}){
    if(chk)
        return <li className="item">{title}✔️</li>;
    else
        return <li className="item">{title}</li>;
}


export default function ToDoLists(){
    const items = todos.map(item =>
    <Item title ={item.title} chk={item.checked}/>
    );

    return(
        <>
        <h1>My to do lists:</h1>
        <ul>{items}</ul>
        </>
    )
}