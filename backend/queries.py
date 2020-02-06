from ddbb_connect import listTable,query,callFun,callFunReturn

def listUsers ():
    return query ('select * from users order by id')

def listCoupons ():
    return query('select * from coupon order by id')

def listUsersE_Mails ():
    return query ('select e_mail from users')

def listCustomers ():
    return listTable ('UserCustomer')

def listTypes ():
    return listTable ('type')

def listRoles ():
    return listTable ('roles')

def listAllPurchases ():
    return listTable ('PurchaseList')

def listAllReviews ():
    return listTable ('ReviewProduct')

def listAllReservations ():
    return listTable ('ReservationsList')

def getUserCustomer (id):
    return callFunReturn ('UserCustomerByID',[id])

def listProducts ():
    return listTable ('ProductsList')

def listPurchases (id_user):
    return callFunReturn ('PurchaseListByID',[id_user])

def listRecomendedProducts (type_id,id):
    return callFunReturn ('RecomendedProducts',[type_id,id])

def getColor_size (prod_id):
    return callFunReturn ('ColorSizeByID',[prod_id])

def getReview (prod_id):
    return callFunReturn ('ReviewByID',[prod_id])

def getUserWishlist (user_id):
    return callFunReturn ('WishlistByID',[user_id])

def getWishlistItem (user_id,prod_id):
    return query ('select * from wishlist where id_user = ' + str(user_id) + ' and id_prod = ' + str(prod_id))

def getPurchaseItem (user_id,prod_id):
    return query ('select * from UserPurchase where id_user = ' + str(user_id) + ' and prod_id = ' + str(prod_id))

def listProductosMasVendidos ():
    return listTable ('ProductosMasVendidos()')

def listPurchaseItems (id):
    return query ('select prod_id,name,color,size,stock,price from PurchaseItems where id_purchase = ' + str(id))

def listCartItems (user_id):
    return query ('select prod_id,name,id_color_size,color,size,stock,price,discount from CartItems where id_user = ' + str(user_id))

def getCartInfo (user_id):
    return query ('select id,price,date,state,id_user,id_coupon from CartInfo where id_user = ' + str(user_id))

def listReservations (user_id):
    return query ('select id,prod_id,name,color,size,stock,price,date,state from ReservationsList where id_user = ' + str(user_id))

def getReservationItem (user_id,id_color_size):
    return query ('select id from ActiveReservations where id_user = ' + str (user_id) + 'and id_color_size = ' + str(id_color_size))

def listReviews (user_id):
    return query ('select id,date,stars,id_product,name from ReviewProduct where id_user = ' + str(user_id))

def listNewProducts ():
    return query ('select * from products ORDER BY id DESC LIMIT 6')

def listHighRatedProducts ():
    return query ('select * from ProductosMejorValorados()')
