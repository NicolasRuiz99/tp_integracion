from ddbb_connect import listTable,query

def listUsers ():
    return listTable ('users')

def listUsersE_Mails ():
    return query ('select e_mail from users')

def listCustomers ():
    return listTable ('customers')

def listTypes ():
    return listTable ('type')

def listRoles ():
    return listTable ('roles')

def getUserCustomer (id):
    return query ('select * from UserCustomer where id_user = ' + str(id))