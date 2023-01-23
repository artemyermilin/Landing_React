import React from "react";
function Prices(){
    return(
    <div className="prices">
		<h2>Тарифы</h2>
		<p>Платите нам столько, сколько хотите. Главное платите :)</p>
		<ul className="tarif">
			<li className="tarif-name">Базовый</li>
			<li className="line"><span className="important">10</span> лайков</li>
			<li className="line"><span className="important">10</span> репостов</li>
			<li className="line"><span className="important">10</span> комментариев</li>
			<li className="line"><span className="important">И ещё важный</span> пункт</li>
			<li className="line">
				<p className="price">25 Рублей</p>
				<p className="period">В день</p>
			</li>
			<li className="cnopka"><a href="#">Купить</a></li>
		</ul>		
		<ul className="tarif tarif2">
			<li className="tarif-name2">Про</li>
			<li className="line"><span className="important">20</span> лайков</li>
			<li className="line"><span className="important">20</span> репостов</li>
			<li className="line"><span className="important">20</span> комментариев</li>
			<li className="line"><span className="important">Тоже важный</span> пункт</li>
			<li className="line">
				<p className="price">50 Рублей</p>
				<p className="period">В день</p>
			</li>
			<li className="cnopka"><a href="#">Купить</a></li>
		</ul>
		<ul className="tarif">
			<li className="tarif-name">Премиум</li>
			<li className="line"><span className="important">50</span> лайков</li>
			<li className="line"><span className="important">50</span> репостов</li>
			<li className="line"><span className="important">50</span> комментариев</li>
			<li className="line"><span className="important">Мега важный</span> пункт</li>
			<li className="line">
				<p className="price">100 Рублей</p>
				<p className="period">В день</p>
			</li>
			<li className="cnopka"><a href="#">Купить</a></li>
		</ul>
	</div>
    )
}
export default Prices