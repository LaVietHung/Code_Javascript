function washcar(){
    return new Promise(resolve => {
        console.log("xe dang duoc rua");
        setTimeout(() =>{
            console.log("xe da rua xong");
            resolve();
        }, 5000);
    });
}
    console.log("bat dau di rua xe");
    washcar().then(() =>{ 
        console.log("goi dien cho chu xe");
        console.log("lai xe ve nha");

    });
    console.log("lam viec khac cho vo");