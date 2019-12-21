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

def listProducts ():
    return listTable ('products')

def listRecomendedProducts (type_id):
    return query ('select * from products where type = ' + str(type_id))

def getColor_size (prod_id):
    return query ('select c.id,c.color,c.size,c.stock from color_size c where prod_id = ' + str(prod_id))

def getReview (prod_id):
    return query ('select r.id,r.date,r.stars,r.title,r.commentary from review r where id_product = ' + str(prod_id))