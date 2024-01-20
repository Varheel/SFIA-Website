''' 
script for calculating 1080 upscale 
dimensions for image assets for SFIA website. 
'''

# 1366x768 > 1920x1080
#sf = 1.40556369

# 2560x1440 > 1920x1080
sf1440 = 0.75

# 3840x2160 > 1920x1080
sf4k = 0.5

# 1366x768 > 3840x2160
sf4k2 = 2.81112738

# 1366x768 > 390x844 mobile

def calc():
    '''
    upscale
    '''
    w1 = 320*sf4k2
    h1 = 147*sf4k2
    print(f'Button 1 - {w1} x {h1}')

    w2 = 885*sf4k2
    h2 = 81*sf4k2
    print(f'Button 2 - {w2} x {h2}')

    w3 = 320*sf4k2
    h3 = 185*sf4k2
    print(f'Button 3 - {w3} x {h3}')

    w4 = 320*sf4k2
    h4 = 40*sf4k2
    print(f'Button 4 - {w4} x {h4}')
    
    w5 = 373*sf4k2
    h5 = 464*sf4k2
    print(f'Button 5 - {w5} x {h5}')
    
    w6 = 320*sf4k2
    h6 = 147*sf4k2
    print(f'Button 6 - {w6} x {h6}')
    
    w7 = 320*sf4k2
    h7 = 173*sf4k2
    print(f'Button 7 - {w7} x {h7}')
    
    w8 = 320*sf4k2
    h8 = 241*sf4k2
    print(f'Button 8 - {w8} x {h8}')
    
    w9 = 70*sf4k2
    h9 = 20*sf4k2
    print(f'Button 9(a-f) - {w9} x {h9}')
    
    w05a = 1350*sf1440
    h05a = 1440*sf1440
    print(f'hammerhead - {w05a} x {h05a}')

if __name__ = "__main__":
    calc()
