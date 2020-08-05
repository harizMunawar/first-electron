import sqlite3
from sys import argv

connection = sqlite3.connect('elecchat.db')
c = connection.cursor()

def create_table():
    c.execute("CREATE TABLE IF NOT EXISTS login_data(username TEXT PRIMARY KEY,password TEXT);")

def select_account(username, password):
    c.execute(f"SELECT * FROM login_data WHERE username = '{username}' AND password = '{password}';")
    result = c.fetchall()
    connection.commit()
    return result
    
if __name__ == "__main__":
    create_table()
    try:
        result = select_account(argv[1], argv[2])
        print(result)
    except Exception as e:
        print(e)

    