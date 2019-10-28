class User:
    def __init__ (self,e_mail,psw,ident = None,id_role = None):
        self._id = ident 
        self._e_mail = e_mail
        self._psw = psw
        self._id_role = id_role 

    #getter
    @property
    def e_mail (self):
        return self._e_mail

    #setter
    @e_mail.setter
    def e_mail (self, new):
        self._e_mail = new

    @property
    def psw (self):
        return self._psw

    @psw.setter
    def psw (self, new):
        self._psw = new

    @property
    def id (self):
        return self._id

    @id.setter
    def id (self, new):
        self._id = new

    @property
    def id_role (self):
        return self._id_role

    @id_role.setter
    def id_role (self, new):
        self._id_role = new


class Customer:
    def __init__ (self,dni,name,surname,genre,c_size,shoe_size,phone_no,id_user,ident = None):
        self._id = ident 
        self._dni = dni
        self._name = name
        self._surname = surname
        self._genre = genre
        self._c_size = c_size
        self._shoe_size = shoe_size
        self._phone_no = phone_no
        self._id_user = id_user 

    @property
    def id (self):
        return self._id

    @id.setter
    def id (self, new):
        self._id = new

    @property
    def dni (self):
        return self._dni

    @dni.setter
    def dni (self, new):
        self._dni = new

    @property
    def name (self):
        return self._name

    @name.setter
    def name (self, new):
        self._name = new

    @property
    def surname (self):
        return self._surname

    @surname.setter
    def surname (self, new):
        self._surname = new

    @property
    def genre (self):
        return self._genre

    @genre.setter
    def genre (self, new):
        self._genre = new

    @property
    def c_size (self):
        return self._c_size

    @c_size.setter
    def c_size (self, new):
        self._c_size = new

    @property
    def shoe_size (self):
        return self._shoe_size

    @shoe_size.setter
    def shoe_size (self, new):
        self._shoe_size = new

    @property
    def phone_no (self):
        return self._phone_no

    @phone_no.setter
    def phone_no (self, new):
        self._phone_no = new

    @property
    def id_user (self):
        return self._id_user

    @id_user.setter
    def id_user (self, new):
        self._id_user = new






