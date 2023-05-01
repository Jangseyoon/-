const items = document.querySelector(".items"); //리스트가 들어가는 곳
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd(){
  //1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text===""){
    input.focus();
    return;
  }

  console.log(text);
  //2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item); //items는 ul태그임.
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:'center', behavior:"smooth"})
  //5. 인풋을 초기화한다.
  input.value="";
  input.focus(); //사용자가 계속 편하게 입력하도록 도와줌
}
let id=0; //UUID
function createItem(text){
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", 'item_row');
  itemRow.setAttribute("data-idx",`${id}`);
  itemRow.innerHTML=
  `<li class="item_row">
    <div class="item">
      <span class="item_name">${text}</span>
      <button class="item_delete"> 
        <i class="fa-solid fa-trash-can" data-idx=${id}></i>
      </button>
    </div>
    <div class="divider"></div>
  </li>`;
  id++;
  return itemRow;
}

addBtn.addEventListener("click",()=>{
  onAdd();
});

input.addEventListener("keypress",(e)=>{
    if (e.key=='Enter') onAdd();
  }
)

items.addEventListener("click",(event)=>{
  const id = event.target.dataset.idx;
  if (id){
    const toBeDeleted = document.querySelector(`.item_row[data-idx="${id}"]`);
    toBeDeleted.remove();
  }
})
