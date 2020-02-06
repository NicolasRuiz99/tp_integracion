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
    result = callFunReturn ('UserWishlistItem',[user_id,prod_id,])
    return result[0]['userwishlistitem']

def getPurchaseItem (user_id,prod_id):
    result = callFunReturn ('UserPurchaseItem',[user_id,prod_id,])
    return result[0]['userpurchaseitem']

def listProductosMasVendidos ():
    return callFunReturn ('TopSellersProducts',[])

def listPurchaseItems (id):
    return callFunReturn ('PurchaseItemsByID',[id])

def listCartItems (user_id):
    return callFunReturn ('CartItemsByID',[user_id])

def getCartInfo (user_id):
    return callFunReturn ('CartInfoByID',[user_id])

def listReservations (user_id):
    return callFunReturn ('ReservationsListByID',[user_id])

def getReservationItem (user_id,id_color_size):
    return callFunReturn ('ActiveReservationsItem',[user_id,id_color_size,])

def listReviews (user_id):
    return callFunReturn ('ReviewProductByID',[user_id])

def listNewProducts ():
    return listTable ('NewProducts')

def listHighRatedProducts ():
    return callFunReturn ('HighRatedProducts',[])