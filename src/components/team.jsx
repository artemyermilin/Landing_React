import React from "react";
import member1 from './img/member1.jpg';
import member2 from './img/member2.jpg';
import member3 from './img/member3.jpg';
import member4 from './img/member4.jpg';
function Team(){
    return(
        <div className="team">
		<h2>Команда</h2>
		<p>Не стоит прогибатся под изменчивый мир</p>
		<div className="member">
			<img src={member1}/>
			<h3>Слава Федоров</h3>
			<p className="position">Директор</p>
			<p className="description">Люблю создавать технологические продукты и выводить их на топовые рынки</p>
			<a href="#">Напиши мне</a>
		</div>
		<div className="member">
			<img src={member2}/>
			<h3>Яна Мищенко</h3>
			<p className="position">Дизайнер</p>
			<p className="description">Не мыслю свою жизнь без дезайна, мне больно когда я вижу что-то некрасивое</p>
			<a href="#">Напиши мне</a>
		</div>
		<div className="member">
			<img src={member3}/>
			<h3>Иннокентий Петрович</h3>
			<p className="position">Директор по безопасности</p>
			<p className="description">Мимо не муха не проскочит, не то что хакер по WiFi подключится</p>
			<a href="#">Напиши мне</a>
		</div>
		<div className="member">
			<img src={member4}/>
			<h3>Эдуард Долотин</h3>
			<p className="position">Front-end Разробочик</p>
			<p className="description">Обожаю Front-end разроботку и создавать продукты, которыми пользуются люди</p>
			<a href="#">Напиши мне</a>
		</div>
	</div>
    )
}
export default Team