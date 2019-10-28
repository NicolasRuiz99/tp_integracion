import psycopg2 as dbapi
from psycopg2 import Error

def connect_ddbb ():
    con = dbapi.connect("dbname='ddbb_sist' user='admin' host='127.0.0.1' password='admin123'")
    cur = con.cursor()
    return con,cur

def disconnect_ddbb (con,cur):
    cur.close()
    con.close()

def addToTable (table,values,qValues):
    try:
        con, cur = connect_ddbb ()
        query = 'insert into ' + table + ' values ' + qValues
        cur.execute (query,values)
        con.commit()
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def listTable (table,values = None,cond = None):
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table
        if cond != None:
            query = query + ' where ' + cond
            cur.execute (query,values)
        else:
            cur.execute (query)  
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def updateTable (table,values,setValues):
    try:
        con, cur = connect_ddbb ()
        query = 'update ' + table + ' set ' + setValues + ' where id = %s' 
        cur.execute (query,values)
        for row in cur.fetchall():
            print (row)
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def deleteFromTable (table,_id):
    try:
        con, cur = connect_ddbb ()
        query = 'delete from ' + table + ' where id = %s'
        cur.execute (query,_id)
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)