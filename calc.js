function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}
function equal()
{
    var exception=document.form.textview.value;
    if(exception){
document.form.textview.value=eval(document.form.textview.value);
    }
}
function screenclean()
{
    document.form.textview.value="";
}
