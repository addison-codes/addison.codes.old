// Book Class
class Book {
	constructor(img, title, author, series, isbn) {
		this.img = img;
		this.title = title;
		this.author = author;
	}
}

// UI Class
class UI {
	static displayBooks() {}

	static addBookToList(book) {
		const list = document.querySelector('#book-list');
		const row = document.createElement('tr');

		row.innerHTML = `
      <td>${book.img}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.series}</td>
      <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
      `;

		list.appendChild(row);
	}

	static deleteBook() {}

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-absolute alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const holder = document.querySelector('.alert-holder');
		const form = document.querySelector('#book-form');
		holder.insertBefore(div, form);

		setTimeout(() => document.querySelector('.alert').remove(), 2000);
	}

	static searchResults() {}

	static clearSearch() {
		document.querySelector('#book-form').reset();
	}

	static closeResults() {}
}

// Store Class
class Store {
	static getBooks() {}

	static addBook(book) {}

	static removeBook(isbn) {}
}

// Search Class
class Search {
	static searchBooks() {
		const term = document.querySelector('#term').value;
		const key = 'e3tRV8bBX3V9UzUCLr0A';
		const url = 'https://www.goodreads.com/search/index.xml?key=' + key + '&q=' + term;
		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		var xhr = new XMLHttpRequest();

		xhr.open('GET', proxyUrl + url);

		xhr.onload = function() {
			var xml = this.responseXML;
			// document.getElementById('results').innerHTML = response;
			console.log(xml);

			var i;
			var table = '<tr><th></th><th>Title</th><th>Author</th><th></th></tr>';
			var x = xml.getElementsByTagName('best_book');
			for (i = 0; i < x.length; i++) {
				table +=
					'<tr><td><img src="' +
					x[i].getElementsByTagName('small_image_url')[0].childNodes[0].nodeValue +
					'"></td><td>' +
					x[i].getElementsByTagName('title')[0].childNodes[0].nodeValue +
					'</td><td>' +
					x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue +
					'</td><td><button class="btn btn-outline-success btn-sm add-btn">Add to Collection</button></td></tr>';
			}
			document.getElementById('results').innerHTML = table;
		};

		xhr.send();
	}

	static validate() {
		const term = document.querySelector('#term').value;
		if (term === '') {
			console.log('term is null');
			UI.showAlert('Please enter a search term', 'danger');
			return false;
		} else {
			UI.showAlert('Successful search', 'success');
			return true;
		}
	}
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Search Books
document.querySelector('#book-form').addEventListener('submit', e => {
	e.preventDefault();
	Search.searchBooks();
	Search.validate();
	// const term = document.querySelector('#term').value;
	// console.log(term);

	UI.clearSearch();
});
