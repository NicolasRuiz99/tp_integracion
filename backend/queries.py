from ddbb_connect import listTable

def listUsers ():
    return listTable ('users')

def listCustomers ():
    return listTable ('customers')

def listTypes ():
    return listTable ('type')

def listRoles ():
    return listTable ('roles')

