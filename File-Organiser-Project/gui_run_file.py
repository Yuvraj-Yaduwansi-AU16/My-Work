from tkinter import Tk
from tkinter import StringVar
from user_interface.gui_base_code import GuiBaseCode
from user_interface.gui_choices import GuiChoices

if __name__ == "__main__":
    root = Tk()
    root.geometry("800x400")
    root.configure(background="cyan")
    root.title("File-Organizer by Yuvraj")

    pathvalue = StringVar()
    choosevalue = StringVar(value="None")

    class_object = GuiBaseCode(pathvalue, choosevalue)
    class_object_button = GuiChoices(pathvalue, choosevalue)
    class_object.pathChooseLabel(root)
    class_object_button.pathChooseEntry(root)
    class_object.button(root)

    root.mainloop()
