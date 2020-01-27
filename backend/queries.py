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
    return listTable ('ProductsList')

def listPurchases (id_user):
    return query ('select * from PurchaseList where id_user = ' + str(id_user))

def listRecomendedProducts (type_id):
    return query ('select * from products where type = ' + str(type_id))

def getColor_size (prod_id):
    return query ('select c.id,c.color,c.size,c.stock from color_size c where prod_id = ' + str(prod_id) + ' order by c.size')

def getReview (prod_id):
    return query ('select r.id,r.date,r.stars,r.title,r.commentary,r.id_user from review r where id_product = ' + str(prod_id))

def getUserWishlist (user_id):
    return query ('select p.id,p.name,p.dsc,p.material,p.genre,p.brand,p.type,p.discount,p.price from wishlist w,products p where w.id_prod = p.id and w.id_user = ' + str(user_id))

def getWishlistItem (user_id,prod_id):
    return query ('select * from wishlist where id_user = ' + str(user_id) + ' and id_prod = ' + str(prod_id))

def getPurchaseItem (user_id,prod_id):
    return query ('select * from UserPurchase where id_user = ' + str(user_id) + ' and prod_id = ' + str(prod_id))

def listProductosMasVendidos ():
    return listTable ('ProductosMasVendidos()')

def listPurchaseItems (id):
    return query ('select prod_id,name,color,size,stock,purch_price from PurchaseItems where id_purchase = ' + str(id))

def listCartItems (user_id):
    return query ('select prod_id,name,id_color_size,color,size,stock,price,discount from CartItems where id_user = ' + str(user_id))

def getCartInfo (user_id):
    return query ('select id,price,date,state,id_user,id_coupon from CartInfo where id_user = ' + str(user_id))

def listReservations (user_id):
    return query ('select id,prod_id,name,color,size,stock,price,discount,date,state from ReservationsList where id_user = ' + str(user_id))

def getReservationItem (user_id,id_color_size):
    return query ('select id from ActiveReservations where id_user = ' + str (user_id) + 'and id_color_size = ' + str(id_color_size))

def listReviews (user_id):
    return query ('select id,date,stars,id_product,name from ReviewProduct where id_user = ' + str(user_id))