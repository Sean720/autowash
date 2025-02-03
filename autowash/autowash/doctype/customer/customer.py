# Copyright (c) 2025, Nashon Mwangi and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Customer(Document):

	# pass
	def validate(self):
		id_validate(self)

def id_validate(self):
	id = self.id_number
	if len(id) != 8:
		frappe.throw("ID number must be eight characters")