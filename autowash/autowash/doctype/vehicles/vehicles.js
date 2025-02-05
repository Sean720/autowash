// Copyright (c) 2025, Nashon Mwangi and contributors
// For license information, please see license.txt

// ToDo
//  -> Number Plate validation?     
//  -> Change doctype name and prove duplicate error.

frappe.ui.form.on("Vehicles", {
	refresh(frm) {
        display_model(frm); 
	},
    
    make(frm){
        display_model(frm);

        if (frm.doc.make) {
            frm.set_query("model", function (){
                return {
                    filters: {
                        make: frm.doc.make,
                    }
                }
            })
        }
    },

});


function display_model(frm) {
    const make = frm.doc.make;
    //  if make is note set, hide

    frm.toggle_display("model", (make));
}