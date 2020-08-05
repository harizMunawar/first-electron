import sqlite3
from sys import argv

connection = sqlite3.connect('elecchat.db')
c = connection.cursor()

def create_table():
    c.execute("CREATE TABLE IF NOT EXISTS login_data(username TEXT PRIMARY KEY,password TEXT)")

def insert_profile(username, password):
    c.execute(f"INSERT INTO login_data (username, password) VALUES ('{username}', '{password}');")
    connection.commit()
    
if __name__ == "__main__":
    create_table()
    try:
        insert_profile(argv[1], argv[2])
        print('succes signup')
    except Exception as e:
        print(e)
    