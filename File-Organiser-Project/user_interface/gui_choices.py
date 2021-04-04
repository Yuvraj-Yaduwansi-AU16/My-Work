from tkinter import Radiobutton
from tkinter import Entry


class GuiChoices():
    def __init__(self, pathvalue, choosevalue="None"):
        self.pathvalue = pathvalue
        self.choosevalue = choosevalue

    def pathChooseEntry(self, root):
        pathentry = Entry(root, textvariable=self.pathvalue)
        pathentry.grid(row=1, column=1, padx=10, pady=10)

        Radiobutton(
            root, text="Type", value="Type",
            variable=self.choosevalue, bg="cyan",
            font="comicsams 10 bold").grid(
                row=2, column=1, padx=10, pady=10)
        Radiobutton(
            root, text="Size", value="Size",
            variable=self.choosevalue, bg="cyan",
            font="comicsams 10 bold").grid(
                row=2, column=2, padx=10, pady=10)
        Radiobutton(
            root, text="Date-Modified", value="Date-Modified",
            variable=self.choosevalue, bg="cyan",
            font="comicsams 10 bold").grid(
                row=2, column=3, padx=10, pady=10)
        Radiobutton(
            root, text="Recently-Used", value="Recently-Used",
            variable=self.choosevalue, bg="cyan",
            font="comicsams 10 bold").grid(
                row=2, column=4, padx=10, pady=10)
