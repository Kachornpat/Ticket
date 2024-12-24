const db = require('../util/database');

module.exports = class Ticket {
    constructor(title, body, user) {
        this.title= title;
        this.body = body;
        this.user = user;
    }

    static getAll(){
        return db.execute('SELECT * FROM tickets');
    }

    static save(ticket) {
        return db.execute(
            'INSERT INTO tickets (title, body, user) VALUES (?, ?, ?)', [ticket.title, ticket.body, ticket.user]
        );
    }
    
    static delete(id){
        return db.execute(
            'DELETE FROM tickets WHERE id = ?' , [id]
        );
    }
};
