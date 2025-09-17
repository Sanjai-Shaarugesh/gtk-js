import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass({
  GTypeName: 'FbrApplication',

}, class extends Gtk.Application {
  vfunc_activate() {
    console.log("Hello! sanjai..");
    const window = new Gtk.ApplicationWindow({ application: this });

    const box = new Gtk.Box({
      orientation: Gtk.Orientation.VERTICAL,
      marginTop: 36,
      marginBottom: 36,
      marginStart: 36,
      marginEnd: 36,
      spacing: 18,
      valign: Gtk.Align.CENTER
    });

    const image = new Gtk.Image({
      iconName: 'system-file-manager-symbolic',
      iconSize: Gtk.IconSize.LARGE
    });

    box.append(image);

    const label = new Gtk.Label({
      label: "Welcome  to  new file browser",
      wrap: true
    });

    // Button
    const button = new Gtk.Button({
      label: "sanjai",
      halign: Gtk.Align.CENTER
    });

    box.append(button);
    box.append(label);

    window.child = box;
    window.present();
  }
}
);
