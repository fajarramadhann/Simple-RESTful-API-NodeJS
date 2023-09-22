import http from "http"; 
import { TodoListService } from "./todolist-service.mjs"; // import class { TodoListService }

const service = new TodoListService(); // membuat instance(objek dari suatu class) service dari class { TodoListService }
const server = http.createServer((request, response) =>{ // bikin server http
    
    response.setHeader("Content-Type", "application/json") // atur header respons jadi JSON

    // request menerima data dari client, response untuk mengirimkan kembali data kepada client

    if(request.method === "GET"){ // jika request method dari client = GET, maka
        service.getTodoList(request, response) // akan mengambil data todolist
    } else if(request.method === "POST"){ // jika req method dari client = POST, maka
        service.createTodo(request, response); // akan meresponse untuk membuat data
    } else if(request.method === "PUT"){
        service.updateTodo(request, response);
    } else if(request.method === "DELETE") {
        service.deleteTodo(request, response);
    }
})
server.listen(3000); // port server

// Berikut adalah cara kerjanya:

// Ketika server menerima permintaan HTTP dari klien (misalnya, browser), server akan memanggil fungsi callback ini dan meneruskan dua parameter: request dan response.

// Objek request berisi informasi tentang permintaan yang masuk, seperti metode HTTP, URL, header, dan data yang dikirim oleh klien.

// Objek response digunakan untuk menghasilkan dan mengirimkan tanggapan (response) kembali kepada klien. Anda akan menggunakan metode-metode pada objek response untuk mengatur header respons, menulis data yang akan dikirimkan ke klien, dan mengirim tanggapan.