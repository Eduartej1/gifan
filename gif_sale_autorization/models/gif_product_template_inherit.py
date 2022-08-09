from odoo import models, fields, api, _
from odoo.exceptions import UserError

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    descount_selector = fields.Selection(string='Tipo de Descuento', selection=
    [('1', 'Precio Fijo'), 
    ('2', 'Precio Porcentual'),],default='1',required=True)
    d_p = fields.Integer('Descuento Porcentual para compras', default=0, required=True)
    d_f = fields.Float('Descuento Fijo para compras', default=0.0, required=True)
    porcentaje_ventas = fields.Integer('Porcentaje de venta', default=0, required=True)
    partners_details = fields.One2many('gif.partners.details', 'product_tmp_id')
    partners_details_purchase = fields.One2many('gif.partners.details.purchase', 'product_tmp_id_purchase')

    @api.onchange('descount_selector')
    def _onchange_descount_selector(self):
        for record in self:
            record.d_f = 0
            record.d_p = 0
            
    

    @api.onchange('partners_details.partner_price')
    def validate(self):
        for record in self:
            for line in record.order_line:
                if self.standard_price >= line.partners_details.partner_price:
                    raise UserError(_('No se puede tener precios negativos. Por favor revisa tu producto'))
                else:
                    pass


                

    
    
        

