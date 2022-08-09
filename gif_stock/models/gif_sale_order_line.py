from odoo import api, fields, models


# class SaleOrderLine(models.Model):
#     _inherit = 'sale.order.line'

#     gif_real_stock1= fields.Float(string=' Cantidad Real Entregada' ,compute='suma_resultado',store=True)
    
#     def suma_resultado(self):
#         for record in self:
#             #resultado = self.env['stock.move.line'].search([('product_id','=',record.product_id.id)])
#             print(record.state)
#             print("###########")
            
#             entregas = record.order_id.picking_ids
#             print(entregas)
#             counter = 0
#             for entrega in entregas:
#                 for line in entrega.move_line_ids_without_package:
#                     print(line.gif_real_stockpicking)
#                     counter += line.gif_real_stockpicking
            
#             record.gif_real_stockpicking =  counter