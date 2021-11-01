function validate(){
    if (eemail() && number()){
        addMessage();
        return true;
    }else{
        alert('Неправильная форма');
        return false;
    }
}