import datetime
from pyscript import Element

def mudatexto(txt):
    # print("Mudando texto")
    Element("muta").write(f"O novo texto é {txt}")
