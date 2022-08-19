from odoo import fields, models


class GifDeliveriRoutes(models.Model):
  _name = 'gif.delivery.routes'
  _description = 'Rutas'

  name = fields.Char(string='Name')
  distribution_route = fields.String(string='Ruta de distribucion')
  date= fields.Datetime(string='Fecha')
  Carrier= fields.String(string='Transportista')
  vehicle_number= fields.String(string='N° de veiculo')
  plates= fields.String(string='Matriculas')
  agreed_freight= fields.String(string='Precio de flete pactado')
  amount_maneuvers= fields.String(string='Importe de maniobras')
  insurance_amount= fields.String(string='Importe de seguros')
