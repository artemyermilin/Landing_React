import React from "react";
function Contacts(){
    return(
    <div className="contacts">
		<h2>Контакты</h2>
		<p>Не будьте скромными, пишите нам</p>
		<p className="contact contact-address">Москва, звонят купола</p>
		<p className="contact contact-phone">Телефон: <a href="tel:+79163787942">+7(916)378-78-42</a></p>
		<p className="contact contact-mail">Email: <a href="mailto:3787942@mail.ru">3787942@mail.ru</a></p>
		<form>
			<p><input type="text" name="name" placeholder="Имя"/></p>
			<p><input type="text" name="name" placeholder="Email"/></p>
			<p><input type="text" name="name" placeholder="Тема"/></p>
			<p><input type="text" name="name" placeholder="Сообщениеы"/></p>
			<p><button>Отправить Сообщение</button></p>
		</form>
	</div>
    )
}
export default Contacts