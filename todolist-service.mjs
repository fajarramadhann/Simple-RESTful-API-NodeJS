export class TodoListService { // bikin class TodoListService yang bakal di export

    todoList = ["NodeJS", "express.js", "django", "laravel"];

    getJsonTodoList(){
        return JSON.stringify({ // ubah objek javascript jadi JSON
            code: 200,
            status: "OK",
            data: this.todoList.map((value, index) =>{
                return {
                    id: index,
                    data: value,
                }
            })
        })
    }
    // Ambil data
    getTodoList(request, response) {
        response.write(this.getJsonTodoList());
        response.end();
    }
    // Bikin data
    createTodo(req, res){
        req.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);

            res.write(this.getJsonTodoList());
            res.end();
        })
    }
    // update data
    updateTodo(req, res){
        req.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            if(this.todoList[body.id]) {
                this.todoList[body.id] = body.todo;
            }

            res.write(this.getJsonTodoList()); 
            res.end();
        })
        
    }
    // hapus data
    deleteTodo(req, res){
        req.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            if(this.todoList[body.id]){
                this.todoList.splice(body.id, 1);
            }
            res.write(this.getJsonTodoList());
            res.end();
        })
    }
}