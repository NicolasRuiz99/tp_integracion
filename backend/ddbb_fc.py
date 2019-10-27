import psycopg2 as dbapi
from psycopg2 import Error
from classes import User
import json

def connect_ddbb ():
    con = dbapi.connect("dbname='ddbb_sist' user='admin' host='127.0.0.1' password='admin123'")
    cur = con.cursor()
    return con,cur

def disconnect_ddbb (con,cur):
    con.commit()
    cur.close()
    con.close()

def registerUser (new):
    try:
        con, cur = connect_ddbb ()
        query = 'insert into users (e_mail,psw) values (%s,%s)'
        new_record = (new.e_mail,new.psw)
        cur.execute (query,new_record)
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def listUsers ():
    try:
        con, cur = connect_ddbb ()
        query = 'select * from users'
        cur.execute (query)
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def modUser (new):
    try:
        con, cur = connect_ddbb ()
        query = 'update users set e_mail = %s, psw = %s where id = %s'
        cur.execute (query,(new.e_mail,new.psw,new.id))
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def getUserByID (_id):
    try:
        con, cur = connect_ddbb ()
        query = 'select * from users where id = %s'
        cur.execute (query,str(_id))
        print (cur.fetchone())
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def deleteUser (_id):
    try:
        con, cur = connect_ddbb ()
        query = 'delete from users where id = %s'
        cur.execute (query,str(_id))
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)


