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

def listTable (table):
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table
        cur.execute (query)  
        for row in cur.fetchall():
            print (row)
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)

def searchID (table,_id):
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table + ' where id = %s'
        cur.execute (query,(_id, ))  
        res = cur.fetchone()
        if (res == None):
            raise Exception ('no results to fetch')
        else:
            return res 
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
        cur.execute (query,(_id, ))
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            print ('OperationFailed', error)
    finally:
        disconnect_ddbb (con,cur)