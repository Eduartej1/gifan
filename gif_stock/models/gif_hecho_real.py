from odoo import fields, models

class SaleOrderLine(models.Model):
    _inherit = 'sale.order.line'

    gif_real_stock1= fields.Float(string=' Cantidad Real Entregada' ,compute='suma_resultado')
    # gif_real_stock2 = fields.Float(string='Cantidad Real',compute="_calcule_salida")
    gif_real_stockpicking= fields.Float(string='Cantidad Entregada')
    related_type = fields.Many2one(comodel_name='stock.picking')
    gif_total_units= fields.Float(string=' Unidades totales' ,compute = 'unidades_totales' )
    unit_type= fields.Many2one(comodel_name='product.template')
    selected= fields.Boolean(string='Select' compute = 'equalization')


    def suma_resultado(self):
        for record in self:
            print(record.state)
            print("###########")
            
            entregas = record.order_id.picking_ids
            print(entregas)
            counter = 0
            for entrega in entregas:
                for line in entrega.move_line_ids_without_package:
                    print(line.gif_real_stockpicking)
                    counter += line.gif_real_stockpicking
            
            record.gif_real_stock1 =  counter

    def unidades_totales(self): 
        for record in self:
            UT = (record.product_template_id.base_unit_count)*(record.product_uom_qty)
            record.gif_total_units = UT

    def equalization(self):
        for record in self:
            if record.Select_all == True:
                record.selected = True
    
    
    
    
class SaleOrder(models.Model):
    
    _inherit = 'sale.order'
    Select_all = fields.Boolean( string = 'Seleccionar Todos', default = False)
        
    