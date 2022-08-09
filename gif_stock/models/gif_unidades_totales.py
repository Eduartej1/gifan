from odoo import fields, models

class TotalUnits(models.Model):
    _inherit = 'sale.order.line'
    _name = 'total.units'

    gif_total_units= fields.Float(string=' Unidades totales' ,compute='unidades_totales')
    related_type = fields.Many2one(comodel_name='stock.picking')
    unit_type= fields.Many2one(comodel_name='product.template')

    def unidades_totales(self):
        for record in self:
            UT = (record.base_unit_count)*(record.product_uom_qty)
            record.gif_total_units = UT
