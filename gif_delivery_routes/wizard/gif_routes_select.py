from odoo import api, fields, models


class WizardRoutesSelection(models.Model):
  _name = 'wizard.route.selection'
  _description = ''

  name = fields.Char(string='Name')
  invoice_routes = fields.Boolean(sring='Rutas de Factura', default=False)
  Picking_routes = fields.Boolean(sring='Rutas de movimientos', default=False)
  
  
