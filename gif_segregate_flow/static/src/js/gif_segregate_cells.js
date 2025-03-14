odoo.define('gif_segregate_flow.gif_segregate_cells.js', function (require) {
    const FormController = require('web.FormController');
    const ListView = require('web.ListView');
    const BasicController = require('web.BasicController');
    const ListRenderer = require('web.ListRenderer');
    const ListEditRenderer = require('web.ListRenderer');
    const core = require('web.core');
    const AbstractController = require('web.AbstractController');
    const ListController = require('web.ListController');

    BasicController.include({
        _getPagingInfo: function (state) {
            const isGrouped = state.groupedBy && state.groupedBy.length;
            counter = 0
            if (model === "sale.order" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_sale_order) {
                        if (data_count[data].data.sum_sale_order === 3) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 1) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 2) {
                            if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 4) {
                            if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 5) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 6) {
                            if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 7) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = 0
                    }

                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 709) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 710) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 708) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId === 712) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter

            }
            else if (model === "account.move" && view === "list" && viewId === 713) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId === 714) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.payment" && view === "list" && viewId === 681) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_payment_sale === 3) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 1) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 2) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 4) {
                        if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 5) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 6) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 7) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else { }
                }
                state.count = counter
            }
            else if (model === "account.batch.payment" && view === "list" && this.controlPanelProps.action.id === 665) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_batch_sale === 3) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 1) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 2) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 4) {
                        if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 5) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 6) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 7) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.batch.payment" && view === "list" && this.controlPanelProps.action.id === 666) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_batch_purchase === 3) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 1) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 2) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 4) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_batch_purchase === 8) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 5) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 6) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 9) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 10) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 12) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 17) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 18) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 20) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 24) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 7) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 11) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 13) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 14) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 19) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 21) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 22) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 25) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 26) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 28) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 15) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 23) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 27) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 29) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 30) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 31) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.payment" && view === "list" && viewId === 682) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_payment_purchase == 3) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 1) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 2) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 4) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_payment_purchase == 8) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 16) {
                        if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 5) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 6) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 9) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 10) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 12) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 17) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 18) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 20) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 24) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 7) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 11) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 13) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 14) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 19) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 21) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 22) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 25) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 26) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 28) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 15) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 23) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 27) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 29) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 30) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 31) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else { }
                }
                state.count = counter
            }
            else if (model === "purchase.order" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_purchase_order) {

                        if (data_count[data].data.sum_purchase_order === 3) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 1) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 2) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 4) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }

                        } else if (data_count[data].data.sum_purchase_order === 8) {
                            if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 16) {
                            if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 5) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 6) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 9) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 10) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 12) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 17) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 18) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 20) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 24) {
                            if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 7) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 11) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 13) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 14) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 19) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 21) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 22) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 25) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 26) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 28) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 15) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 23) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 27) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 29) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 30) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 31) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = state.count
                    }
                }
                state.count = counter
            }
            else if (model === "purchase.requisition" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_requisition_order) {
                        if (data_count[data].data.sum_requisition_order === 3) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 1) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 2) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 4) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }

                        } else if (data_count[data].data.sum_requisition_order === 8) {
                            if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 16) {
                            if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 5) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 6) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 9) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 10) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 12) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 17) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 18) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 20) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 24) {
                            if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 7) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 11) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 13) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 14) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 19) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 21) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 22) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 25) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 26) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 28) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 15) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 23) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 27) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 29) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 30) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 31) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = state.count
                    }
                }
                state.count = counter

            }
            else { }
            return {
                currentMinimum: (isGrouped ? state.groupsOffset : state.offset) + 1,
                limit: isGrouped ? state.groupsLimit : state.limit,
                size: isGrouped ? state.groupsCount : state.count,
            };
        },
    });

    ListController.include({
        getSelectedIds: function () {
            let model = this.initialState.model
            let view = this.initialState.viewType
            if (model === "sale.order" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            else if (model === "purchase.order" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            else if (model === "purchase.requisition" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            else if (model === "account.move" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            else if (model === "account.payment" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            else if (model === "account.batch.payment" && view === "list") {
                $('.o_list_select_domain').hide()
            }
            return _.map(this.getSelectedRecords(), function (record) {
                return record.res_id;
            });
        },
        getSelectedRecords: function () {
            //En renderer.state.data están los 72
            var self = this;
            var old_data = this.renderer.state.data;
            var record = this.selectedRecords;
            var new_db_id = [];
            var new_data = [];
            var new_id = [];
            var counter = 0
            for (r in record) {
                new_db_id.push(record[r])
            }
            for (old in old_data) {
                for (n in new_db_id) {
                    if (new_db_id[n] === old_data[old].id) {
                        new_data.push(old_data[old])
                        new_id.push(old_data[old].res_id)
                        counter = counter + 1
                        break;
                    }
                }
            }
            this.renderer.state.data = new_data
            this.renderer.state.res_ids = new_id
            this.renderer.state.count = counter


            return _.map(this.selectedRecords, function (db_id) {
                for (var n = 0; n <= new_db_id.length; n++) {
                    if (new_db_id[n] === db_id) {
                        break;
                    }
                    else {
                        continue;
                    }
                }
                this.data = counter;
                this.data_count = new_data;
                return self.model.get(new_db_id[n], { raw: true });
            });

        },
    });

    FormController.include({ //Este no elimina el boton de borrar

        getTitle: function () {
            let model = this.initialState.model
            let view = this.initialState.viewType
            if (model === "sale.order" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            else if (model === "purchase.order" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            else if (model === "purchase.requisition" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            else if (model === "account.move" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            else if (model === "account.payment" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            else if (model === "account.batch.payment" && view === "form") {
                $('.fa-chevron-left').hide()
                $('.fa-chevron-right').hide()
                $('.o_pager_counter').hide()
            }
            return this.model.getName(this.handle);
        },

    });

    ListView.include({
        _updateMVCParams: function () {
            this._super.apply(this, arguments);
            this.controllerParams.noLeaf = !!this.loadParams.context.group_by_no_leaf;
        }

    });

    ListRenderer.include({ // le da en la madre al bote de basura
        /**
        * Render a row, corresponding to a record.
        *
        * @private
        * @param {Object} record
        * @returns {jQueryElement} a <tr> element
        */
        _renderRow: function (record) {
            let data_show = this.state.data
            var self = this;

            var $cells = this.columns.map(function (node, index) {
                return self._renderBodyCell(record, node, index, { mode: 'readonly' });
            });
            let model_show = this.state.model
            let view = this.viewType
            for (data in data_show) {
                if (model_show === 'sale.order' && view === "list") {
                    if (data_show[data].data.sum_sale_order) {
                        if ($cells[0][0].title === data_show[data].data.name) {
                            if (data_show[data].data.sum_sale_order == 7) {
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_sale_order == 1) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_sale_order == 2) {
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_sale_order == 4) {
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }//Comienza otra condición.
                            if (data_show[data].data.sum_sale_order == 3) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_sale_order == 5) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_sale_order == 6) {
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                        }
                    }
                    else {
                        // var $tr = $('<tr/>', { class: 'o_data_row' })
                        //     .attr('data-id', record.id)
                        //     .append($cells);
                        // if (this.hasSelectors) {
                        //     $tr.prepend(this._renderSelector('td', !record.res_id));
                        // }
                        // if (this.no_open && this.mode === "readonly") {
                        //     $tr.addClass('o_list_no_open');
                        // }
                        // this._setDecorationClasses($tr, this.rowDecorations, record);
                    }
                }
                else if (model_show === 'purchase.order' && view === "list") {
                    if (data_show[data].data.sum_purchase_order) {
                        if ($cells[1][0].title === data_show[data].data.name) {
                            if (data_show[data].data.sum_purchase_order == 7) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 1) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 2) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 4) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }//Comienza otra condición.
                            if (data_show[data].data.sum_purchase_order == 8) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 16) {
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 3) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 9) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 17) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 5) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 10) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 24) {
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 12) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 18) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 6) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 20) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_purchase_order == 11) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 25) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 13) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 19) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 21) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 14) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 26) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 22) {
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 28) {
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 15) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 23) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 27) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 29) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_purchase_order == 30) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición 
                            if (data_show[data].data.sum_purchase_order == 31) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        }
                    }
                    else {
                        // var $tr = $('<tr/>', { class: 'o_data_row' })
                        //     .attr('data-id', record.id)
                        //     .append($cells);
                        // if (this.hasSelectors) {
                        //     $tr.prepend(this._renderSelector('td', !record.res_id));
                        // }
                        // if (this.no_open && this.mode === "readonly") {
                        //     $tr.addClass('o_list_no_open');
                        // }
                        // this._setDecorationClasses($tr, this.rowDecorations, record);
                    }

                }
                else if (model_show === 'purchase.requisition' && view === "list") {
                    if (data_show[data].data.sum_requisition_order) {
                        if ($cells[0][0].title === data_show[data].data.name) {
                            if (data_show[data].data.sum_requisition_order == 7) {
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 1) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else {}
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 2) {
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 4) {
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }//Comienza otra condición.
                            if (data_show[data].data.sum_requisition_order == 8) {
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 16) {
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 3) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 9) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 17) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 5) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 10) {
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 24) {
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 12) {
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 18) {
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 6) {
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 20) {
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condicion
                            if (data_show[data].data.sum_requisition_order == 11) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 25) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 13) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 19) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 21) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 14) {
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 26) {
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 22) {
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 28) {
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 15) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 23) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 27) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 29) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición
                            if (data_show[data].data.sum_requisition_order == 30) {
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { } //Comienza otra condición 
                            if (data_show[data].data.sum_requisition_order == 31) {
                                if (data_show[data].data.is_primary_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_requisition === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        }
                        else { }
                    }
                    else {
                        // var $tr = $('<tr/>', { class: 'o_data_row' })
                        //     .attr('data-id', record.id)
                        //     .append($cells);
                        // if (this.hasSelectors) {
                        //     $tr.prepend(this._renderSelector('td', !record.res_id));
                        // }
                        // if (this.no_open && this.mode === "readonly") {
                        //     $tr.addClass('o_list_no_open');
                        // }
                        // this._setDecorationClasses($tr, this.rowDecorations, record);
                    }
                }
                else if (model_show === 'account.move' && view === "list") {
                    if (this.state.domain[0][2] === 'in_invoice' || this.state.domain[0][2] === 'in_refund' || this.state.domain[0][2] === 'in_receipt') { // Ventas - Clientes
                        if ($cells[0][0].innerText === data_show[data].data.name) {
                            if (data_show[data].data.sum_account_purchase == 1) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 2) {
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 4) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 8) {
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 16) {
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 3) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 5) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 6) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 7) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 9) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 10) {
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 11) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 12) {
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 13) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 14) {
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 15) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 17) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 18) {
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 19) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 20) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 21) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 22) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 23) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 24) {
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 25) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 26) {
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 27) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 28) {
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 29) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 30) {
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_purchase == 31) {
                                if (data_show[data].data.is_primary_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        } else { }
                    }
                    else if (this.state.domain[0][2] === 'out_invoice') { // Compras - Proveedores
                        if ($cells[0][0].innerText === data_show[data].data.name) {
                            if (data_show[data].data.sum_account_sale == 1) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 2) {
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 4) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 3) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 5) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 6) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 7) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        } else { }
                    }
                    else if (this.state.domain[0][2] === 'out_receipt') {
                        if ($cells[0][0].innerText === data_show[data].data.name) {
                            if (data_show[data].data.sum_account_sale == 1) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 2) {
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 4) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 3) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 5) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 6) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 7) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        } else { }
                    }
                    else if (this.state.domain[0][2] === 'out_refund') {
                        if ($cells[0][0].innerText === data_show[data].data.name) {
                            if (data_show[data].data.sum_account_sale == 1) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 2) {
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 4) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 3) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 5) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 6) {
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_account_sale == 7) {
                                if (data_show[data].data.is_primary_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_accountform_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        } else { }
                    }
                    else {
                        var $tr = $('<tr/>', { class: 'o_data_row' })
                            .attr('data-id', record.id)
                            .append($cells);
                        if (this.hasSelectors) {
                            $tr.prepend(this._renderSelector('td', !record.res_id));
                        }
                        if (this.no_open && this.mode === "readonly") {
                            $tr.addClass('o_list_no_open');
                        }
                        this._setDecorationClasses($tr, this.rowDecorations, record);
                    }
                }
                else if (model_show === 'account.payment' && view === "list") {
                    if (this.state.context.default_payment_type === "inbound") {
                        if ($cells[1][0].title === data_show[data].data.name) {
                            if (data_show[data].data.sum_payment_sale == 1) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 2) {
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 4) {
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 3) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 5) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 6) {
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_sale == 7) {
                                if (data_show[data].data.is_primary_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_sale === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        }
                    }
                    else if (this.state.context.default_payment_type === "outbound") {
                        if ($cells[1][0].title === data_show[data].data.name) {
                            if (data_show[data].data.sum_payment_purchase == 1) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 2) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 4) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 8) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 16) {
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 3) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 5) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 6) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 7) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 9) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 10) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 11) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 12) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 13) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 14) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 15) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 17) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 18) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 19) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 20) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 21) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 22) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 23) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 24) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 25) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 26) {
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 27) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 28) {
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 29) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 30) {
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                            if (data_show[data].data.sum_payment_purchase == 31) {
                                if (data_show[data].data.is_primary_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_associated_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_insume_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_ben_dis_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                                if (data_show[data].data.is_office_purchase === true) {
                                    var $tr = $('<tr/>', { class: 'o_data_row' })
                                        .attr('data-id', record.id)
                                        .append($cells);
                                    if (this.hasSelectors) {
                                        $tr.prepend(this._renderSelector('td', !record.res_id));
                                    }
                                    if (this.no_open && this.mode === "readonly") {
                                        $tr.addClass('o_list_no_open');
                                    }
                                    this._setDecorationClasses($tr, this.rowDecorations, record);
                                } else { }
                            } else { }
                        } else { }
                    }
                    else {
                        var $tr = $('<tr/>', { class: 'o_data_row' })
                            .attr('data-id', record.id)
                            .append($cells);
                        if (this.hasSelectors) {
                            $tr.prepend(this._renderSelector('td', !record.res_id));
                        }
                        if (this.no_open && this.mode === "readonly") {
                            $tr.addClass('o_list_no_open');
                        }
                        this._setDecorationClasses($tr, this.rowDecorations, record);
                    }
                }
                else if (model_show === 'account.batch.payment' && view === "list") {
                    if (this.state) {
                        if (this.state.context.default_batch_type === "outbound") {
                            if ($cells[0][0].innerText === data_show[data].data.name) {
                                if (data_show[data].data.sum_batch_purchase == 1) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 2) {
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 4) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 8) {
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 16) {
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 3) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 5) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 6) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 7) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 9) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 10) {
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 11) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 12) {
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 13) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 14) {
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 15) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 17) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 18) {
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 19) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 20) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 21) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 22) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 23) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 24) {
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 25) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 26) {
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 27) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 28) {
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 29) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 30) {
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_purchase == 31) {
                                    if (data_show[data].data.is_primary_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_associated_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_insume_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_purchase === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                            } else { }
                        }
                        else if (this.state.context.default_batch_type === "inbound") {
                            if ($cells[0][0].innerText === data_show[data].data.name) {
                                if (data_show[data].data.sum_batch_sale == 1) {
                                    if (data_show[data].data.is_primary_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 2) {
                                    if (data_show[data].data.is_office_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 4) {
                                    if (data_show[data].data.is_ben_dis_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 3) {
                                    if (data_show[data].data.is_primary_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 5) {
                                    if (data_show[data].data.is_primary_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 6) {
                                    if (data_show[data].data.is_ben_dis_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                                if (data_show[data].data.sum_batch_sale == 7) {
                                    if (data_show[data].data.is_primary_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_office_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                    if (data_show[data].data.is_ben_dis_sale === true) {
                                        var $tr = $('<tr/>', { class: 'o_data_row' })
                                            .attr('data-id', record.id)
                                            .append($cells);
                                        if (this.hasSelectors) {
                                            $tr.prepend(this._renderSelector('td', !record.res_id));
                                        }
                                        if (this.no_open && this.mode === "readonly") {
                                            $tr.addClass('o_list_no_open');
                                        }
                                        this._setDecorationClasses($tr, this.rowDecorations, record);
                                    } else { }
                                } else { }
                            } else { }
                        } else {
                            var $tr = $('<tr/>', { class: 'o_data_row' })
                                .attr('data-id', record.id)
                                .append($cells);
                            if (this.hasSelectors) {
                                $tr.prepend(this._renderSelector('td', !record.res_id));
                            }
                            if (this.no_open && this.mode === "readonly") {
                                $tr.addClass('o_list_no_open');
                            }
                            this._setDecorationClasses($tr, this.rowDecorations, record);
                        }
                    }
                    else {
                        var $tr = $('<tr/>', { class: 'o_data_row' })
                            .attr('data-id', record.id)
                            .append($cells);
                        if (this.hasSelectors) {
                            $tr.prepend(this._renderSelector('td', !record.res_id));
                        }
                        if (this.no_open && this.mode === "readonly") {
                            $tr.addClass('o_list_no_open');
                        }
                        this._setDecorationClasses($tr, this.rowDecorations, record);
                    }
                }
                else {
                    var $tr = $('<tr/>', { class: 'o_data_row' })
                        .attr('data-id', record.id)
                        .append($cells);
                    if (this.hasSelectors) {
                        $tr.prepend(this._renderSelector('td', !record.res_id));
                    }
                    if (this.no_open && this.mode === "readonly") {
                        $tr.addClass('o_list_no_open');
                    }
                    this._setDecorationClasses($tr, this.rowDecorations, record);
                }
            }
            return $tr;
        },
    });

    ListEditRenderer.include({
        _renderRow: function (record, index) {
            var $row = this._super.apply(this, arguments);
            var _t = core._t;

            if (this.addTrashIcon) {
                var $icon = this.isMany2Many ?
                    $('<button>', { 'class': 'fa fa-times', 'name': 'unlink', 'aria-label': _t('Unlink row ') + (index + 1) }) :
                    $('<button>', { 'class': 'fa fa-trash-o', 'name': 'delete', 'aria-label': _t('Delete row ') + (index + 1) });
                var $td = $('<td>', { class: 'o_list_record_remove' }).append($icon);
                $row.append($td);
            }
            return $row;
        }
    });

    AbstractController.include({

        _updateControlPanelProps: function (state) {
            model = this.modelName
            view = this.viewType
            viewId = this.viewId
            var counter = 0
            if (!this.controlPanelProps.cp_content) {
                this.controlPanelProps.cp_content = {};
            }
            if (this.$buttons) {
                this.controlPanelProps.cp_content.$buttons = this.$buttons;
            }
            if (model === "sale.order" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_sale_order) {
                        if (data_count[data].data.sum_sale_order === 3) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 1) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 2) {
                            if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 4) {
                            if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 5) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 6) {
                            if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_sale_order === 7) {
                            if (data_count[data].data.is_primary_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_sale === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_sale === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = 0
                    }

                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 709) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 710) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId == 708) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_sale == 3) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 1) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 2) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 4) {
                        if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 5) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 6) {
                        if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_sale == 7) {
                        if (data_count[data].data.is_primary_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId === 712) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter

            }
            else if (model === "account.move" && view === "list" && viewId === 713) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.move" && view === "list" && viewId === 714) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_account_purchase === 3) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 1) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 2) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 4) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_account_purchase === 8) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 5) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 6) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 9) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 10) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 12) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 17) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 18) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 20) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 24) {
                        if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 7) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 11) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 13) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 14) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 19) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 21) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 22) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 25) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 26) {
                        if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 28) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 15) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 23) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 27) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 29) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 30) {
                        if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_account_purchase === 31) {
                        if (data_count[data].data.is_primary_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_accountform_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.payment" && view === "list" && viewId === 681) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_payment_sale === 3) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 1) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 2) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 4) {
                        if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 5) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 6) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_sale === 7) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.batch.payment" && view === "list" && this.controlPanelProps.action.id === 665) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_batch_sale === 3) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 1) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 2) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 4) {
                        if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 5) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 6) {
                        if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_sale === 7) {
                        if (data_count[data].data.is_primary_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_sale === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_sale === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.batch.payment" && view === "list" && this.controlPanelProps.action.id === 666) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_batch_purchase === 3) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 1) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 2) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 4) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_batch_purchase === 8) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 16) {
                        if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 5) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 6) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 9) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 10) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 12) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 17) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 18) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 20) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 24) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 7) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 11) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 13) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 14) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 19) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 21) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 22) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 25) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 26) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 28) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 15) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 23) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 27) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 29) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 30) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_batch_purchase === 31) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "account.payment" && view === "list" && viewId === 682) {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_payment_purchase == 3) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 1) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 2) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 4) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }

                    } else if (data_count[data].data.sum_payment_purchase == 8) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 16) {
                        if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 5) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 6) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 9) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 10) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 12) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 17) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 18) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 20) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 24) {
                        if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 7) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 11) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 13) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 14) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 19) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 21) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 22) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 25) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 26) {
                        if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 28) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 15) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 23) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 27) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 29) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 30) {
                        if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    } else if (data_count[data].data.sum_payment_purchase == 31) {
                        if (data_count[data].data.is_primary_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_insume_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_office_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_ben_dis_purchase === true) {
                            counter = counter + 1
                        }
                        else if (data_count[data].data.is_associated_purchase === true) {
                            counter = counter + 1
                        }
                        else { }
                    }
                }
                state.count = counter
            }
            else if (model === "purchase.order" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_purchase_order) {

                        if (data_count[data].data.sum_purchase_order === 3) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 1) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 2) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 4) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }

                        } else if (data_count[data].data.sum_purchase_order === 8) {
                            if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 16) {
                            if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 5) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 6) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 9) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 10) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 12) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 17) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 18) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 20) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 24) {
                            if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 7) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 11) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 13) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 14) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 19) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 21) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 22) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 25) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 26) {
                            if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 28) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 15) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 23) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 27) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 29) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 30) {
                            if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_purchase_order === 31) {
                            if (data_count[data].data.is_primary_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_purchase === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_purchase === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = state.count
                    }
                }
                state.count = counter

            }
            else if (model === "purchase.requisition" && view === "list") {
                data_count = state.data
                for (data in data_count) {
                    if (data_count[data].data.sum_requisition_order) {
                        if (data_count[data].data.sum_requisition_order === 3) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 1) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 2) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 4) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }

                        } else if (data_count[data].data.sum_requisition_order === 8) {
                            if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 16) {
                            if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 5) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 6) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 9) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 10) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 12) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 17) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 18) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 20) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 24) {
                            if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 7) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 11) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 13) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 14) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 19) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 21) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 22) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 25) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 26) {
                            if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 28) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 15) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 23) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 27) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 29) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 30) {
                            if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        } else if (data_count[data].data.sum_requisition_order === 31) {
                            if (data_count[data].data.is_primary_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_insume_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_office_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_ben_dis_requisition === true) {
                                counter = counter + 1
                            }
                            else if (data_count[data].data.is_associated_requisition === true) {
                                counter = counter + 1
                            }
                            else { }
                        }
                    }
                    else {
                        counter = state.count
                    }
                }
                state.count = counter

            }
            Object.assign(this.controlPanelProps, {
                actionMenus: this._getActionMenuItems(state),
                pager: this._getPagingInfo(state),
                title: this.getTitle(),
            });
        },
    });
});