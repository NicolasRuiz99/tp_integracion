import psycopg2 as dbapi
from psycopg2 import Error
import json

DEC2FLOAT = dbapi.extensions.new_type(
    dbapi.extensions.DECIMAL.values,
    'DEC2FLOAT',
    lambda value, curs: float(value) if value is not None else None)
dbapi.extensions.register_type(DEC2FLOAT)

def connect_ddbb ():
    con = dbapi.connect("dbname='rfhdbqhh' user='rfhdbqhh' host='motty.db.elephantsql.com' password='0AtujGm4UIIGA1wzJHk3TXYrZnalpr0t'")
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
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)

def listTable (table):
    results = []
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table
        cur.execute (query)  
        columns = list(map(lambda x: x[0], cur.description))
        for row in cur.fetchall():
            results.append(dict(zip(columns, row)))
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)
        return results

def searchID (table,_id):
    res = []
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table + ' where id = %s'
        cur.execute (query,(_id, ))  
        res = cur.fetchone()         
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed ' + error.args[0])
    finally:
        disconnect_ddbb (con,cur)
        return res 

def updateTable (table,values,setValues):
    try:
        con, cur = connect_ddbb ()
        query = 'update ' + table + ' set ' + setValues + ' where id = %s' 
        cur.execute (query,values)
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
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
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)

def deleteFromTable2 (table,values,qValues):
    try:
        con, cur = connect_ddbb ()
        query = 'delete from ' + table + ' where ' + qValues
        cur.execute (query,values)
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)

def searchID2 (table,values,qValues):
    res = []
    try:
        con, cur = connect_ddbb ()
        query = 'select * from ' + table + ' where ' + qValues
        cur.execute (query,values)  
        res = cur.fetchone()
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)
        return res 

def logInUser (e_mail,psw):
    try:
        con, cur = connect_ddbb ()
        query = 'select id,rol from UserRole where e_mail = %s and psw = %s' 
        cur.execute (query,(e_mail,psw,))  
        res = cur.fetchone()
        if (res == None):
            raise Exception ('Invalid e_mail and password')
        else:
            user_id = res [0]
            rol = res[1]
            return user_id,rol
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)

def logInUser2 (id):
    try:
        con, cur = connect_ddbb ()
        query = 'select id,rol from UserRole where external_id = %s' 
        cur.execute (query,(id,))  
        res = cur.fetchone()
        if (res == None):
            raise Exception ('Invalid external id')
        else:
            user_id = res [0]
            rol = res [1]
            return user_id,rol
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)

def query (query):
    results = []
    try:
        con, cur = connect_ddbb ()
        cur.execute (query)  
        columns = list(map(lambda x: x[0], cur.description))
        for row in cur.fetchall():
            results.append(dict(zip(columns, row)))
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)
        return results

def callFun (name,values):
    try:
        con, cur = connect_ddbb ()
        cur.callproc (name,values)  
        con.commit ()
    except (Exception,Error) as error:
        if (con):
            raise Exception ('OperationFailed', error.args[0])
    finally:
        disconnect_ddbb (con,cur)