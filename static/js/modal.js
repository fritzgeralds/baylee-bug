const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const map = document.querySelector(".map");

var info = {
	returns: {
		title: "<h2 class='header-600-it'>Returns</h2>",
		info: "<h3><strong>I gladly accept returns and exchanges</strong></h3><p>Contact me within: 14 days of delivery</p><p>Ship items back within: 30 days of delivery</p><h3><strong>I don't accept cancellations</strong></h3><p>But please contact me if you have any problems with your order.</p><h3><strong>The following items can't be returned or exchanged</strong></h3><p>Because of the nature of these items, unless they arrive damaged or defective, I can't accept returns for:</p><ul><li>Custom or personalized orders</li><li>Perishable products (like food or flowers)</li><li>Digital downloads</li><li>Intimate items (for health/hygiene reasons)</li></ul><h3><strong>Returns and exchange details</strong></h3><p>I want my customers to be happy with what they receive, therefore if you have any concerns with your purchase, please contact me immediately so we can discuss an exchange or refund. Exchanges and refunds will be honored up to 7 days after the arrival of your purchase. All shipping charges are the responsibility of the buyer. The item MUST be returned in the same brand new condition it was in when sent by seller. No odors, stains, holes, rips etc!!!</p>",
	},
	payment: {
		title: "<h2 class='header-600-it'>Payment</h2>",
		info: "<h3><strong>Payment is due at the time of purchase.</strong></h3><p>Payment is accepted through PayPal, credit card, and Etsy gift cards.</p><p>Payment is expected within 3 days of purchase. If payment is not received within 3 days, the order will be canceled.</p>",
	},
	shipping: {
		title: "<h2 class='header-600-it'>Shipping</h2>",
		info: "<h3><strong>Shipping upgrades available in the cart</strong></h3><p>Shipping from United States</p><p>Processing time</p><p>1-3 business days</p><p>Estimated shipping times</p><p>North America: 3-5 business days</p><p>Europe: 5-7 business days</p><p>Asia Pacific: 5-7 business days</p><p>Latin America and the Caribbean: 5-7 business days</p><p>North Africa and the Middle East: 5-7 business days</p><p>Sub-Saharan Africa: 5-7 business days</p><p>Customs and import taxes</p><p>Buyers are responsible for any customs and import taxes that may apply. I'm not responsible for delays due to customs.</p>",
	},
	map: {
		title: "<span style='display:none;'></span>",
		info: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.2732164171744!2d-119.02267768380183!3d35.373679080266996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea695b002b694f%3A0x5abafbf3c722a1a6!2sBakersfield%20City%20Hall!5e0!3m2!1sen!2sus!4v1666566060861!5m2!1sen!2sus' width='100%' height='900' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
	},
};

const buildModal = (event) => {
	const modalDict = info[event.toLowerCase()];
	const modalTitle = document.querySelector(".modal-title");
	const modalInfo = document.querySelector(".modal-info");
	modalTitle.innerHTML = modalDict.title;
	modalInfo.innerHTML = modalDict.info;
	toggleModal();
};

const toggleModal = () => {
	modal.classList.toggle("show-modal");
};

const windowOnClick = (event) => {
	if (event.target.classList.contains("map")) {
		buildModal("map");
	}

	if (event.target.classList.contains("trigger")) {
		buildModal(event.target.innerHTML);
	}

	if (event.target === modal) {
		toggleModal();
	}
};

window.addEventListener("click", windowOnClick);
