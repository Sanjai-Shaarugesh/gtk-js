import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass({
  GTypeName: 'FbrApplication',

}, class extends Gtk.Application {
  vfunc_activate() {
    console.log("Hello! sanjai..");
    const window = new Gtk.ApplicationWindow({ application: this });
    // const label = new Gtk.Label({ label: "Hello sanjai 🥷" });
    // window.child = label;

    const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL });
    window.child = box;
    window.present();
  }
}
);
