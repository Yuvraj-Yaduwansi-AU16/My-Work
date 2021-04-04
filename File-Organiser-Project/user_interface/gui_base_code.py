from tkinter import Label
from tkinter import Button
import tkinter.messagebox as tmsg
from choices import Choices


class GuiBaseCode():
    def __init__(self, pathvalue, choosevalue="None"):
        self.pathvalue = pathvalue
        self.choosevalue = choosevalue

    def pathChooseLabel(self, root):
        Label(root, text="Your Files Organizer", font="comicsams 20 bold",
              bg="cyan").grid(row=0, column=2, pady=10)

        path = Label(root, text="Path", bg="cyan", font="comicsams 15 bold")
        choose = Label(root, text="Choices", bg="cyan",
                       font="comicsams 15 bold")

        path.grid(row=1)
        choose.grid(row=2, padx=10, pady=10)

    def button(self, root):
        Button(
            text="Kindly! Organize My Files", command=self.getvalues,
            bg="orange", font="comicsams 15 bold").grid(column=2)

    def getvalues(self):
        Choices.find(self.choosevalue.get(), self.pathvalue.get())
        self.finished()

    def finished(self):
        tmsg.showinfo(
            "File-Organizer by Yuvraj",
            "We Have Successfully Organized Your Files.")
